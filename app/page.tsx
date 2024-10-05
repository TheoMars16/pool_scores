'use client'
import React, { useState, useEffect } from "react"
import * as XLSX from "xlsx"
import { ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Hero {
  name: string
  score: number
  color: string
}

type RowType = [string, number]

export default function SuperHeroScores() {
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [loading, setLoading] = useState(true)
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/scores.xlsx")
        const arrayBuffer = await response.arrayBuffer()
        const workbook = XLSX.read(arrayBuffer, { type: "array" })
        const sheetName = workbook.SheetNames[0]
        const worksheet = workbook.Sheets[sheetName]
        const data: Hero[] = (XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as RowType[])
          .slice(1, 5)
          .map((row: RowType, index: number) => ({
            name: row[0],
            score: row[1],
            color: getHeroColor(index)
          }))
        setHeroes(data)
      } catch (error) {
        console.error("Error reading Excel file:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const sortHeroes = () => {
    const sortedHeroes = [...heroes].sort((a, b) =>
      sortOrder === "asc" ? a.score - b.score : b.score - a.score
    )
    setHeroes(sortedHeroes)
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
  }

  const getHeroColor = (index: number): string => {
    const colors = ["bg-blue-600", "bg-gray-800", "bg-yellow-600", "bg-red-600"]
    return colors[index % colors.length]
  }

  const getHeroLogo = (name: string): string => {
    return `/${name.toLowerCase().replace(/\s+/g, '-')}.png`
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/bg-dc.jpg')",
          filter: "brightness(0.5)"
        }}
      ></div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center text-white">Super Hero Scores</h1>
        <div className="flex justify-center mb-6">
          <Button
            onClick={sortHeroes}
            variant="outline"
            className="flex items-center bg-white text-black hover:bg-gray-200"
          >
            Sort Heroes
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="flex flex-col items-center space-y-4 max-w-md mx-auto">
          {heroes.map((hero, index) => (
            <Card key={index} className={`${hero.color} text-white shadow-lg w-full bg-opacity-80`}>
              <div className="flex justify-between items-center p-4">
                <div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{hero.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-4xl font-bold">{hero.score}</p>
                  </CardContent>
                </div>
                <div className="flex-shrink-0">
                  <img
                    src={getHeroLogo(hero.name)}
                    alt={`${hero.name} logo`}
                    className="w-20 h-20 object-contain mr-10"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}