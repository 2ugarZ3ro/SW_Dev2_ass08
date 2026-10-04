import DateReserve from '@/components/DateReserve'

export default function BookingPage() {
  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Book a Venue</h1>
      <form>
        <DateReserve />
        <div className="mt-6">
          <button
            type="submit"
            name="Book Venue"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Book Venue
          </button>
        </div>
      </form>
    </main>
  )
}