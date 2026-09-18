import type { Event } from "@/types/event"
const API: string = "http://localhost:3002"

export async function getEvents(): Promise<Event[] | []> {
    const response = await fetch(`${API}/events`)
    const data = await response.json();
    return data
}

