import CardItems from '@/components/CardItems'
import CategoryFilter from '@/components/CategoryFilter'
import Header from '@/components/Header'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Header />
      <CategoryFilter />
      <CardItems />
    </div>
  )
}
