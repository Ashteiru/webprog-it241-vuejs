import { createApp } from 'vue'

import App from './App.vue'
import PersonalProfile from './components/PersonalProfile.vue'
import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import CommentForm from './components/CommentForm.vue'
import Comment from './components/Comment.vue'
import InstrumentForm from './components/InstrumentForm.vue'
import Instruments from './components/Instruments.vue'

const app = createApp(App)

app.component('personal-profile', PersonalProfile)
app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('comment-form', CommentForm)
app.component('comment', Comment)
app.component('instrument-form', InstrumentForm)
app.component('instruments', Instruments)

app.mount('#app')