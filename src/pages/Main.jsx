//react-router-dom
import { useLoaderData , NavLink} from 'react-router-dom'
//redux
import { useDispatch } from 'react-redux';
import { setProducts } from '../app/features/products/productsSlice'
//styles
import {styles} from '../style'
import { useEffect } from 'react';

export const Main = () => {

  const data = useLoaderData()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(
      setProducts(data.products)
      )
      
  },[])
  return (
    <div className={`space-y-4 ${styles.mainPage}`}>
          
      {/* TITLE */}
      <h1 className={styles.title}>Our Selection</h1>

      {/* PRODUCTS */}
      <div className='grid grid-cols-3 gap-6 w-[90%]'>
        
        {data.products.map((product)=>(
          <div key={product.id} className='bg-blue-300 relative rounded-b-3xl'>
            <img className='h-[150px] w-full' src={product.thumbnail} alt="" />
            
            {/* DETAILS */}
            <div className='p-2 grid'>
              <h1 className={styles.largeText}>{product.title}</h1>
              <p className = {`${styles.text} text-red-600`}>Discount {product.discountPercentage} %</p>
              <p className={styles.text}>{product.price} $</p>
              <span className='absolute top-1 right-1 w-[30px] rounded-xl bg-gray-200 text-center'>
                <p>{product.rating}</p>
              </span>
              <NavLink to={`products/${product.id}`} className='place-self-end hover:scale-105 hover:underline'>View Details</NavLink>
            </div>
          </div>
        ))}

      </div>
    
</div>
  )
}


//Data Loader
export const productsLoader = async () =>{
  const res = await fetch('https://dummyjson.com/products/category/fragrances')
  return res.json()
}