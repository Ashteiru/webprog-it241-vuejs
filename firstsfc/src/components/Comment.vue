<template>
  <div>
    <h2>Comments</h2>
    <div v-if="loading" class="loading">Loading comments...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="comments.length === 0" class="no-data">No comments yet.</div>
    <div v-else class="comments-list">
      <div v-for="comment in comments" :key="comment.id" class="comment-item">
        <h4>{{ comment.name }}</h4>
        <p>{{ comment.comment }}</p>
        <small>{{ formatDate(comment.created_at) }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const comments = ref([])
const error = ref(null)
const loading = ref(true)

async function getComments() {
  loading.value = true
  error.value = null
  
  try {
    const { data, error: fetchError } = await supabase
      .from('comments')
      .select('*')
      .order('created_at', { ascending: false })

    if (fetchError) {
      console.error("Error fetching comments:", fetchError)
      error.value = "Error loading comments. Please try again later."
    } else {
      comments.value = data || []
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err)
    error.value = "An unexpected error occurred. Please try again later."
  } finally {
    loading.value = false
  }
}

function formatDate(dateString) {
  if (!dateString) return 'N/A'
  return new Date(dateString).toLocaleDateString()
}

// Listen for comment added events to refresh the list
function handleCommentAdded() {
  getComments()
}

onMounted(() => {
  getComments()
  window.addEventListener('commentAdded', handleCommentAdded)
})
</script>

<style scoped>
.loading {
  text-align: center;
  color: #666;
  font-style: italic;
}

.error {
  color: #dc3545;
  text-align: center;
  padding: 1rem;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 4px;
  margin: 1rem 0;
}

.no-data {
  text-align: center;
  color: #666;
  font-style: italic;
  padding: 2rem;
}

.comments-list {
  margin-top: 1rem;
}

.comment-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.comment-item h4 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.comment-item p {
  margin: 0.5rem 0;
  line-height: 1.5;
}

.comment-item small {
  color: #666;
}
</style>