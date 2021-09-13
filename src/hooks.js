import { useState } from 'react'
import axios from 'axios'
import { v4 as uuid } from 'uuid'

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true)

  const flipCard = () => {
    setIsFacingUp((isUp) => !isUp)
  }

  return [isFacingUp, flipCard]
}

const useAxios = (BASE_URL) => {
  const [cards, setCards] = useState([])

  const addCard = async (endpoint) => {
    let response
    if (!endpoint) {
      response = await axios.get(`${BASE_URL}`)
    } else {
      response = await axios.get(`${BASE_URL}${endpoint}/`)
    }
    
    setCards((cards) => [...cards, { ...response.data, id: uuid() }])
  }

  return [cards, addCard]
}

export {
  useFlip,
  useAxios
}