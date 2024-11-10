"use client"

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleJet: (id: string, complete: boolean) => void
  }


export function  TodoItem({ id, title, complete, toggleJet }: TodoItemProps) {
return (<li className="flex gap-1 items-center">
    <input type="checkbox" id={id} className="cursor-pointer peer" defaultChecked={complete} onChange={e =>toggleJet(id, e.target.checked)} />
    <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">
        {title}
    </label>
</li>
)
}