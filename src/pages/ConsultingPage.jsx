import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Julius Alfi',
    specialty: 'Kardiologi',
    experience: '19 tahun',
    rating: '84%',
    fee: 'Rp45.000',
    image: '/doctors/julius.png',
  },
  {
    name: 'Dr. Sulistyo Budiman',
    specialty: 'Spesialis Jantung',
    experience: '21 tahun',
    rating: '92%',
    fee: 'Rp85.000',
    image: '/doctors/sulistyo.png',
  },
  {
    name: 'Dr. Juliari Simatupang',
    specialty: 'Pulmonologi',
    experience: '13 tahun',
    rating: '88%',
    fee: 'Rp55.000',
    image: '/doctors/juliari.png',
  },
  {
    name: 'Dr. Michael Gustiawan',
    specialty: 'Nutrisi & Dietetik',
    experience: '16 tahun',
    rating: '90%',
    fee: 'Rp60.000',
    image: '/doctors/michael.png',
  },
  {
    name: 'Dr. Adam Wong',
    specialty: 'Spesialis Jantung',
    experience: '29 tahun',
    rating: '94%',
    fee: 'Rp90.000',
    image: '/doctors/adam.png',
  },
  {
    name: 'Dr. Noor Atikah',
    specialty: 'Pulmonologi',
    experience: '19 tahun',
    rating: '87%',
    fee: 'Rp60.000',
    image: '/doctors/atikah.png',
  },
  {
    name: 'Dr. Yenni Wongso',
    specialty: 'Spesialis Jantung',
    experience: '19 tahun',
    rating: '84%',
    fee: 'Rp60.000',
    image: '/doctors/yenni.png',
  },
];

export default function ConsultingPage() {
  const [search, setSearch] = useState('');

  return (
    <div className="p-4 bg-white min-h-screen">
      <div className="sticky top-0 bg-white z-10 pb-4">
        <h1 className="text-2xl font-semibold text-red-600">Find a Doctor</h1>
        <p className="text-gray-500 text-sm">Search for specialists and book consultations easily</p>
        <div className="relative mt-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search doctor or specialty..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 border rounded w-full"
          />
        </div>
      </div>

      <ScrollArea className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doctors.filter(doc =>
            doc.name.toLowerCase().includes(search.toLowerCase()) ||
            doc.specialty.toLowerCase().includes(search.toLowerCase())
          ).map((doc, index) => (
            <Card key={index} className="flex items-center p-4 shadow border">
              <img src={doc.image} alt={doc.name} className="w-20 h-20 rounded-md object-cover mr-4" />
              <CardContent className="flex-1 space-y-1">
                <h2 className="text-lg font-semibold">{doc.name}</h2>
                <p className="text-sm text-gray-600">{doc.specialty}</p>
                <div className="flex text-xs text-gray-500 space-x-3">
                  <span>{doc.experience}</span>
                  <span>{doc.rating}</span>
                </div>
              </CardContent>
              <div className="text-center">
                <div className="text-red-600 font-bold text-sm mb-2">{doc.fee}</div>
                <Button className="text-white bg-red-600 hover:bg-red-700 text-xs">Book</Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <div className="mt-6 flex justify-center">
        <Button variant="outline" className="text-sm border-gray-300 hover:bg-gray-100 w-full md:w-1/3">
          Load More Doctors
        </Button>
      </div>
    </div>
  );
}
