import { Button } from '../components/ui/button'
function EnterPage() {
  return (
    <div className='flex flex-col items-center  mt-30 '>
      <div className='flex text-center flex-col items-center'>
        <h1 className=" text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600  via-purple-600 to-pink-600 bg-clip-text text-transparent">Yoshlar Uchun Networking <br />Platformasi</h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl ">O'zbekiston yoshlari o'rtasida professional aloqalarni kuchaytiring, yangi imkoniyatlar toping va karyerangizni rivojlantiring</p>
      </div>

      <div className='flex gap-6 mt-10'>
        <Button className="py-6 px-10 flex items-center" variant="destructive"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/person-male.png" alt="person-male"/> Hoziroq Boshlash</Button>
        <Button className="py-6 px-10 flex items-center" variant="outline"><img width="24" height="24" src="https://img.icons8.com/material-outlined/24/calendar--v1.png" alt="calendar--v1"/> Tadbirlarni Ko'rish</Button>
      </div>
      <div className='flex mt-10 gap-13'>
        <div className='flex flex-col items-center gap-1'><h3 className="text-3xl font-bold text-blue-600">2,500+</h3> <p className='text-gray-600'>Faol Foydalanuvchi</p></div>
        <div className='flex flex-col items-center gap-1'><h3 className="text-3xl font-bold text-purple-600">150+</h3> <p className='text-gray-600'>Oylik Tadbirlar</p></div>
        <div className='flex flex-col items-center gap-1'><h3 className="text-3xl font-bold text-pink-600">50+</h3> <p className='text-gray-600'>Professional Guruh</p></div>
        <div className='flex flex-col items-center gap-1'><h3 className="text-3xl font-bold text-indigo-600">95%</h3> <p className='text-gray-600'>Muvaffaqiyat Darajasi</p></div>
      </div>

      <div className='flex flex-col items-center mt-20 gap-10'>
        <div className='flex flex-col items-center gap-2 w-full max-w-[672px]'>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nima uchun YouthConnect?</h2>
          <p className="text-center text-xl text-gray-600 max-w-2xl mx-auto">Zamonaviy texnologiyalar yordamida networking jarayonini osonlashtiruvchi xususiyatlar</p>
        </div>

        <div className='grid md:grid-cols-3 gap-8 mx-4'>
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className='p-3 bg-green-100 inline-block rounded-xl mb-4'>
              <img width="24" height="24" src="https://img.icons8.com/forma-light/24/40C057/lightning-bolt.png" alt="lightning-bolt"/>
            </div>
            <h3 className="text-2xl font-semibold leading-none tracking-tight mb-2">Tezkor Ulanish
            </h3>
            <p className="text-sm text-muted-foreground">AI yordamida sizga mos odamlarni topish va ularga tezkor ulanish imkoniyati
            </p>
          </div>
        
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-shadow p-6">
            <div className='p-3 bg-purple-100 inline-block rounded-xl mb-4'>
              <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/7950F2/globe.png" alt="globe"/>
            </div>
            <h3  className="text-2xl font-semibold leading-none tracking-tight mb-2">Global Imkoniyatlar
            </h3>
            <p className="text-sm text-muted-foreground"> Mahalliy va xalqaro tadbirlar, ishlar va loyihalarga kirish imkoniyati
            </p>
          </div>
        
        <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg hover:shadow-xl transition-shadow p-6">
           <div className='p-3 bg-pink-100 inline-block rounded-xl mb-4'>
             <img className='' width="24" height="24" src="https://img.icons8.com/forma-regular/24/F25081/goal.png" alt="goal"/>
           </div>
            <h3  className="text-2xl font-semibold leading-none tracking-tight mb-2">Maqsadli Networking
            </h3>
            <p className="text-sm text-muted-foreground">O'z sohangiz va qiziqishlaringiz bo'yicha aniq maqsadli aloqalar o'rnatish
            </p>
          </div>
        </div>
      </div>

   </div>
  )
}

export default EnterPage
