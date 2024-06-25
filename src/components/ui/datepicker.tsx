import { CalendarIcon } from "@heroicons/react/24/outline";

export function Datepicker() {
  return (
    <button
      className="flex items-center gap-2 h-9 w-full rounded-lg border shadow-sm bg-transparent px-3 py-1 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal"
    >
      <CalendarIcon className="h-4" />
      Pick a date
    </button>
  )
}