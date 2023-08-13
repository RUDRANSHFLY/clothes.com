import React from 'react'
import "../Categories/Categories.scss"
import { Link } from 'react-router-dom'


const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                    <img src="https://images.pexels.com/photos/8638311/pexels-photo-8638311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="" />
                    <Link className='link' to='/products/3'>
                        <button>
                            SALE
                        </button>
                    </Link>
            </div>

            <div className="row">
                    <img src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="" />
                    
                    <Link className='link' to='/products/2'>
                        <button>
                            WOMEN
                        </button>
                    </Link>
            </div>
        </div>
        <div className="col">
            <div className="row">
                    <img src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="" />
                    
                    <Link className='link' to='/products/2'>
                        <button>
                            NEW SEASON
                        </button>
                    </Link>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/878358/pexels-photo-878358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="" />
                        
                        <Link className='link' to='/products/3/'>
                            <button>
                                MEN
                            </button>
                    </Link>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                    <img src="https://images.pexels.com/photos/11158679/pexels-photo-11158679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="" />
                    <Link className='link' to='/products/2'>
                        <button>ACCESORIES</button>
                    </Link>
                    </div>
                </div>
                
            </div>
                <div className="row">
                <img src="https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" srcSet="" />
                    <Link className='link' to='/products/3'>
                        <button>SHOES</button>
                    </Link>
                </div>

        </div>
    </div>
  )
}

export default Categories;