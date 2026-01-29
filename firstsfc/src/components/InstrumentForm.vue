<template>
  <div>
    <h2>Add Instrument</h2>
    <form @submit.prevent="submitInstrument">
      <div class="form-group">
        <label for="name">Instrument Name:</label>
        <input type="text" id="name" v-model="name" required class="form-control">
      </div>
      <div class="form-group">
        <label for="type">Type:</label>
        <select id="type" v-model="type" required class="form-control">
          <option value="">Select a type</option>
          <option value="String">String</option>
          <option value="Wind">Wind</option>
          <option value="Percussion">Percussion</option>
          <option value="Keyboard">Keyboard</option>
          <option value="Brass">Brass</option>
        </select>
      </div>
      <button type="submit" class="btn btn-primary">Add Instrument</button>
      <div v-if="submissionStatus" class="mt-2">
        {{ submissionStatus }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabaseClient'

const name = ref('')
const type = ref('')
const submissionStatus = ref(null)

async function submitInstrument() {
  submissionStatus.value = "Submitting..."
  
  try {
    const { error } = await supabase
      .from('instruments')
      .insert([{ name: name.value, type: type.value }])

    if (error) {
      console.error("Error inserting instrument:", error)
      submissionStatus.value = "Error adding instrument. Please try again."
    } else {
      submissionStatus.value = "Instrument added successfully!"
      name.value = ''
      type.value = ''
      // Emit event to refresh instruments list
      window.dispatchEvent(new CustomEvent('instrumentAdded'))
    }
  } catch (err) {
    console.error("An unexpected error occurred:", err)
    submissionStatus.value = "An unexpected error occurred. Please try again later."
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.form-control {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.btn:hover {
  background-color: #218838;
}

.mt-2 {
  margin-top: 0.5rem;
  font-weight: bold;
}
</style>