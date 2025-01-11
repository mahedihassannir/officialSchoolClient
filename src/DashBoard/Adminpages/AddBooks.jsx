

import { useNavigate } from 'react-router-dom';
import '../../ExtraCss/bg.css'
import Swal from 'sweetalert2';
import { useRef } from 'react';
import UseBook from '../../hooks/Usebook';
const AddBooks = () => {



    const key = `890b5ec0923fcc8472f7e690406adc40`

    // const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`
    const uploadUrl = `https://api.imgbb.com/1/upload?key=${key}`

    // from submit arrow => function

    // navagitr
    const navigate = useNavigate()
    const ImageRef = useRef(null)


    const [, refetch] = UseBook()

    const handleFrom = (e) => {

        e.preventDefault()
        const from = e.target

        const name = from.name.value

        const pricee = from.price.value

        const category = from.category.value

        const writter = from.writter.value

        const Description = from.description.value

        const pages = from.pages.value

        const bookDescription = from.bookDescription.value

        const bookUrl = from.bookUrl.value

        // const allFromData = { name, recipe, time, category, pricee, Description, }

        const price = parseInt(pricee)

        // image upload system
        // console.log(allFromData);
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
                fetch(`https://school-server-main-cgaqorflu-mahedinir34678gmailcoms-projects.vercel.app/booksPost`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ name, bookUrl, writter, category, price, Description, bookDescription, image, pages })

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `New Book added None in the free book house`,
                                showConfirmButton: false,
                                timer: 1300
                            })

                        }
                        navigate('/Dashboard/books')
                        refetch()
                    })
                // post on db ends



            })
        // ends
    }


    return (
        <div className="w-full px-2 h-screen  bg4  ">

            <h1 className='text-center text-3xl font-bold text-[#db87f0] mt-10'>Add Book section </h1>
            <form onSubmit={handleFrom} className=" mt-16 ml-10 gap-2">
                <div className="flex">

                    <div className=" pl-5 ml-4 pt-4  w-1/2 py-2  rounded-lg ">

                        <textarea placeholder='BOOK DESCRIPTION' className='rounded-lg border-2 w-11/12 pl-3 pt-3 ' name="bookDescription" id="" cols="30" rows="10" required></textarea>


                    </div>
                    {/* dis of book */}

                    {/* right section */}

                    <div className=" pl-5 pt-4  w-1/2 py-2  rounded-lg ">

                        <textarea placeholder='Why this book ' className=' rounded-lg border-2 w-11/12 pl-3 pt-3 ' name="description" id="" cols="30" rows="10" required></textarea>


                    </div>

                </div>



                {/* add book product  */}
                <div className="w-1/2 py-2 mx-auto pl-2  rounded-lg  bg-teal-800">

                    {/* form admin comps */}
                    {/* <AddFoodInput></AddFoodInput> */}
                    {/* form admin comps */}

                    <div className="grid grid-cols-2 gap-2 px-2">
                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">name</span>
                                {/* text-[#340e8d] */}
                            </label>
                            <input name="name" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="book name" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">price</span>
                            </label>
                            <input name="price" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food recipe" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">
                                    Book picture</span>
                            </label>
                            <input ref={ImageRef} type="file" placeholder="You can't touch this" className="file-input file-input-bordered w-full max-w-xs" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300 ">Category</span>
                            </label>
                            <input name="category" className="input  mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food category" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Writer name</span>
                            </label>
                            <input name="writter" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="text" placeholder="Food name" required />
                        </div>

                        {/* page input */}

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">pages</span>
                            </label>
                            <input name="pages" className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="number" placeholder="Pages" required />
                        </div>

                        <div className="">
                            <label htmlFor="">
                                <span className="text-gray-300">Book Url</span>
                            </label>
                            <input name='bookUrl' className="input mt-2 input-bordered input-secondary w-full max-w-xs" type="url" placeholder="Pages" required />
                        </div>


                    </div>


                    <div className="text-center mt-2 ">
                        <button className='py-3 px-5 shadow-md text-gray-300 rounded-md hover:bg-[#db87f0] hover:text-white font-semibold mx-auto '>
                            Add Book
                        </button>
                    </div>





                </div>

            </form>





        </div>
    );
};

export default AddBooks;