export interface Task {
    id?: number
    title: string
    description: string
    deadline: string | number
    priority?: string
    solved?: boolean
    assigned: number
}