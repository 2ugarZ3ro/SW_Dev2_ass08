import Image from 'next/image'

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params

  // mock venue data
  const mockVenueRepo = new Map()
  mockVenueRepo.set('001', { name: 'The Bloom Pavilion', image: '/img/bloom.jpg' })
  mockVenueRepo.set('002', { name: 'Spark Space', image: '/img/spark.jpg' })
  mockVenueRepo.set('003', { name: 'The Grand Table', image: '/img/grandtable.jpg' })

  const venue = mockVenueRepo.get(vid)
  if (!venue) {
    return <main className="p-8">Venue not found</main>
  }

  return (
    <main className="p-8">
      <div className="flex flex-row gap-6">
        <Image
          src={venue.image}
          alt={venue.name}
          width={300}
          height={200}
          className="rounded-lg w-[30%]"
        />
        <div className="text-xl font-semibold">{venue.name}</div>
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return [{ vid: '001' }, { vid: '002' }, { vid: '003' }]
}
