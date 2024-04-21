import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* <div className="flex justify-center items-center bg-slate-300 m-10 p-10 max-w-6xl mx-auto">
        <div className="w-2/3 max-w-7xl text-center">
          <h1 className="text-black font-extrabold text-2cl">
            Welcome to Panaverse
          </h1>
          <h2 className="text-black">Happy to See you</h2>
          <button className="bg-green-400 text-white font-semibold px-3 py-1 mt-2 text-base rounded-md ">
            Get Started
          </button>
        </div>
        <div>
          <Image
            src="/automations.png"
            alt="automation"
            width={200}
            height={200}
            className="rounded-full p-3"
          />
        </div>
      </div> */}

      <div className="flex justify-evenly bg-slate-300 max-w-6xl mx-auto rounded-xl h-70">
        <div className="p-3 max-w-xs m-1 bg-blue-200 rounded-x1 py-4 my-3">
          <p className="tracking-widest italic text-xl leading-8">
            "When the WHY is clear, the HOW is easy."
          </p>
          <h4 className="text-xl uppercase">- Unknown</h4>
        </div>

        <div className="p-3 max-w-xs m-1 bg-blue-200 rounded-x1 py-4 my-3 ">
          <p className="italic text-xl leading-8">
            "If you are prayig for the rain, you gotta deal with the Mud too."
          </p>
          <h4 className="text-xl uppercase">- Denzel Washington</h4>
        </div>

        <div className="p-3 max-w-xs m-1 bg-blue-200 rounded-x1  my-3">
          <p className="italic text-xl leading-8">
            "Women loves what they hear, Men loves what they see, that's why
            Women will always wear makeup and men will always lie.
          </p>
          <h4 className="text-xl uppercase">- Idris Alba"</h4>
        </div>
      </div>

      <div className="flex justify-around bg-slate-100 m-4 p-8 rounded-xl">
        <button className="bg-blue-400  px-8 py-2 rounded-3xl text-white">
          Profile
        </button>
        <button className="bg-blue-400 rounded-3xl px-8 py-2 text-white">
          Notification
        </button>
        <button className="bg-blue-400 rounded-3xl px-8 py-2 text-white">
          Payments
        </button>
        <button className="bg-blue-400 rounded-3xl px-8 py-2 text-white">
          Setttings
        </button>
      </div>

      <div className="shadow-2xl mt-8 mb-8 bg-slate-400 max-w-xs m-auto rounded-xl py-10 px-5">
        <div>
          <h1 className="text-white text-2xl font-semibold">
            Learning TailWind CSS
          </h1>
          <p className="text-md text-grey-200 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
            perspiciatis nostrum molestias itaque ut iste harum alias reiciendis
            enim corrupti modi nobis rerum consequuntur, nulla eius, odit quas
            minus accusantium.
          </p>
        </div>
        <div className="flex justify-between mt-4 px-1">
          <button className="bg-gray-900 text-white px-3 py-1 rounded-xl">
            Prev
          </button>
          <button className="bg-gray-900 text-white px-3 py-1 rounded-xl">
            Next
          </button>
        </div>
      </div>

      <div className="bg-gray-200 m-auto py-10 w-full">
        <div className="bg-white justify-around max-w-5xl flex items-center m-auto rounded-xl shadow-2xl my-10 px-10 flex-wrap">
          <div className="pb-5 text-center">
            <Image
              src="/guy1.jpg"
              alt="automation"
              width={150}
              height={150}
              className="rounded-full p-4"
            />
            <h2 className="font-bold">John White</h2>
            <p>Project Manager</p>
          </div>
          <div className="text-center pb-5">
            <Image
              src="/gal1.jpg"
              alt="automation"
              width={150}
              height={150}
              className="rounded-full p-4"
            />
            <h2 className="font-bold">Jane Mike</h2>
            <p>Marketing Manager</p>
          </div>
          <div className="text-center pb-5">
            <Image
              src="/gal2.jpg"
              alt="automation"
              width={150}
              height={150}
              className="rounded-full p-4"
            />
            <h2 className="font-bold">Mitchel Oliver</h2>
            <p>Graphic Designer</p>
          </div>
          <div className="text-center pb-5">
            <Image
              src="/gal3.jpg"
              alt="automation"
              width={150}
              height={150}
              className="rounded-full p-4"
            />
            <h2 className="font-bold">Jeena Paulson</h2>
            <p>SEO Expert</p>
          </div>
        </div>

        <div className="bg-gray-300 my-2 flex justify-center max-full">
          <div className="bg-white rounded-2xl max-w-lg mx-10 px-10 py-10 flex items-center my-5">
            <Image
              src={
                'https://images.pexels.com/photos/927451/pexels-photo-927451.jpeg?auto=compress&cs=tinysrgb&w=600'
              }
              width={200}
              height={200}
              alt="image"
              className="rounded-full object-cover w-32 h-32 object-top"
            />

            <div className="m-5">
              <h2 className="font-bold text-xl">Justin Maller</h2>
              <p>Designer - Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white my-4 flex justify-center max-w-5xl m-auto">
        <div className="bg-white rounded-2xl shadow-xl p-5 m-5 text-center items-center flex flex-col">
          <div className="flex justify-center">
            <Image
              src="/icon1.png"
              alt="icon 1"
              width={100}
              height={100}
              className="p-4"
            />
          </div>
          <h2 className="mt-2 font-bold text-xl mb-2">Photoshop</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            natus facilis accusantium.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-5 m-5 text-center items-center flex flex-col">
          <div className="flex justify-center">
            <Image
              src="/icon2.png"
              alt="icon 2"
              width={100}
              height={100}
              className="p-4"
            />
          </div>
          <h2 className="mt-2 font-bold text-xl mb-2">Video Production</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            natus facilis accusantium.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-5 m-5 text-center items-center flex flex-col">
          <div className="flex justify-center">
            <Image
              src="/icon3.png"
              alt="icon 3"
              width={100}
              height={100}
              className="p-4"
            />
          </div>
          <h2 className="mt-2 font-bold text-xl mb-2">Digital Illustration</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            natus facilis accusantium.
          </p>
        </div>
      </div>

      <div className=" max-w-xl m-auto">
        <div className="flex items-start bg-white max-w-md w-auto my-6">
          <span className="block bg-red-600 text-white font-bold text-xl py-1 px-3 rounded mr-4">
            1
          </span>
          <div>
            <h3 className="text-xl font-bold text-gray-700">
              Why should I come maybe it's a waste of time?
            </h3>
            <p className="mt-1">
              Rose event is organized for both aspiring and accomplished
              designers, developers and marketers around the world.
            </p>
          </div>
        </div>
        <div className="flex items-start bg-white max-w-md w-auto my-6">
          <span className="block bg-red-600 text-white font-bold text-xl py-1 px-3 rounded mr-4">
            2
          </span>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Whom is this event intended for?
            </h3>
            <p className="mt-1">
              You should come to Rose this year because it will be one of the
              most information packed events of the year.
            </p>
          </div>
        </div>
        <div className="flex items-start bg-white max-w-md w-auto my-6">
          <span className="block bg-red-600 text-white font-bold text-xl py-1 px-3 rounded mr-4">
            3
          </span>
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Any restrictions that I should be aware of?
            </h3>
            <p className="mt-1">
              Yes you definitely need to leave your preconceptions behind, keep
              an open mind and enjoy the presentations.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto mt-16">
        <div className="bg-white max-w-4xl justify-center m-auto">
          <div className="flex items-center">
            <Image
              src={
                'https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=200'
              }
              alt="young guy"
              width={200}
              height={200}
              className="object-cover p-3 h-36"
            />
            <div>
              <h2 className="text-xl font-bold">Alex Green</h2>
              <p className="text-gray-600 text-sm">Founder and CEO</p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                ullam voluptates debitis deleniti perspiciatis molestias tempora
                doloremque aliquam perferendis impedit?
              </p>
            </div>
          </div>

          <div className="flex items-center even:flex-row-reverse even:text-right">
            <Image
              src={
                'https://images.pexels.com/photos/10210764/pexels-photo-10210764.jpeg?auto=compress&cs=tinysrgb&w='
              }
              alt="young guy"
              width={150} 
              height={150} 
              className="object-cover p-3 h-150 w-150" />
            <div>
              <h2 className="text-xl font-bold">Alexa Kardi</h2>
              <p className="text-gray-600 text-sm">Finance Director</p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                ullam voluptates debitis deleniti perspiciatis molestias tempora
                doloremque aliquam perferendis impedit?
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-2xl my-12 mx-auto p-8 bg-gray-100">
          <div className="flex w-auto max-w-none">
            
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-l-md border-2 border-gray-300 flex-grow px-3 py-3"
            />
            <button
              type="submit"
              className="bg-green-700 text-white p-3 rounded-r-md px-6 py-3"
            >
              Subcribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
