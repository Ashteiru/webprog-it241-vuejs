<template>
  <div>
    <h2>Instruments</h2>
    <div v-if="loading" class="loading">Loading instruments...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <div v-else-if="instruments.length === 0" class="no-data">No instruments found.</div>
    <div v-else class="instruments-list">
      <div v-for="instrument in instruments" :key="instrument.id" class="instrument-item">
        <h3>{{ instrument.name }}</h3>
        <p><strong>Type:</strong> {{ instrument.type }}</p>
        <p><small>Added: {{ formatDate(instrument.created_at) }}</small></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'

const instruments = ref([])
const error = ref(null)
const loading = ref(true)

async function getInstruments() {
  loading.value = true
  error.value = null
  
  try {
    const { data, error: fetchError } = await supabase
      .from('instruments')
      .select('*')
      .order('created_at', { ascending: false })

    if (fetchError) {
      console.error("Error fetching instruments:", fetchError)
      error.value = "Error loading instruments. Please try again later."
    } else {
      instruments.value = data || []
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

// Listen for instrument added events to refresh the list
function handleInstrumentAdded() {
  getInstruments()
}

onMounted(() => {
  getInstruments()
  window.addEventListener('instrumentAdded', handleInstrumentAdded)
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

.instruments-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.instrument-item {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.instrument-item h3 {
  margin: 0 0 0.5rem 0;
  color: #333;
}

.instrument-item p {
  margin: 0.25rem 0;
}

.instrument-item small {
  color: #666;
}
</style>