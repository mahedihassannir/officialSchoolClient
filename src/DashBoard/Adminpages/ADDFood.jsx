

import { useNavigate } from 'react-router-dom';
import AddFoodInput from '../../AdminCompos/AddFoodInput';
import '../../ExtraCss/bg.css'
import Swal from 'sweetalert2';
import { useRef } from 'react';

const ADDFood = () => {
    const key = `890b5ec0923fcc8472f7e690406adc40`

    // const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`

    // from submit arrow => function

    // navagitr
    const navigate = useNavigate()
    const ImageRef = useRef(null)

    const handleFrom = (e) => {

        e.preventDefault()
        const from = e.target

        const name = from.name.value
        const pricee = from.price.value
        const category = from.category.value
        const recipe = from.recipe.value
        const time = from.time.value
        const Description = from.description.value

        const allFromData = { name, recipe, time, category, pricee, Description, }

        const price = parseInt(pricee)

        // image upload system
        console.log(allFromData);
        const file = ImageRef.current.files[0]

        const Imagedaat = new FormData()
        Imagedaat.append('image', file)
        fetch(uploadUrl, {
            method: "POST",
            body: Imagedaat
        })
            .then(res => res.json())
            .then(data => {

                const image = data.data.display_url
                console.log(image);

                // post on db start
                fetch(`http://localhost:5000/food`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ name, recipe, time, category, price, Description, image })

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `new food item added successfully`,
                                showConfirmButton: false,
                                timer: 1300
                            })

                        }
                        navigate('/Food')
                    })
                // post on db ends



            })
        // ends
    }



    return (
        <div className="w-full px-2 h-screen  bg2  ">

            <h1 className='text-center text-3xl font-bold text-[#db87f0] mt-10'>Add Food section <span className='text-red-400'>complete</span></h1>
            <form onSubmit={handleFrom} className="flex mt-16 ml-10 gap-2">
                <div className="w-1/2 py-2 pl-2  rounded-lg  bg-teal-800">

                    {/* form admin comps */}
                    {/* <AddFoodInput></AddFoodInput> */}
                    {/* form admin comps */}

                    <div className="grid grid-cols-2 gap-2 px-2">
                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">name</span>
                                {/* text-[#340e8d] */}
                            </label>
                            <input name="name" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food name" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">price</span>
                            </label>
                            <input name="price" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food recipe" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Food picture</span>
                            </label>
                            <input ref={ImageRef} type="file" placeholder="You can't touch this" className="file-input file-input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">category</span>
                            </label>
                            <input name="category" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food category" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">recipe</span>
                            </label>
                            <input name="recipe" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food name" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">ending time</span>
                            </label>
                            <input name="time" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="time" placeholder="Food name" required />
                        </div>


                    </div>


                    <div className="text-center w-1/2 mt-2 py-3 px-5 shadow-md text-gray-300 rounded-md hover:bg-[#db87f0] hover:text-white font-semibold mx-auto">
                        <button>
                            Add product
                        </button>
                    </div>





                </div>

                {/* right section */}

                <div className=" pl-5 pt-4  w-1/2 py-2  rounded-lg ">

                    <textarea placeholder='Description About Food Product ' className=' rounded-lg border-2 w-11/12 pl-3 pt-3 ' name="description" id="" cols="30" rows="10" required></textarea>


                </div>
            </form>


        </div>
    );
};

export default ADDFood;