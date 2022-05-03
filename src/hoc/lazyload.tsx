import React, {Suspense} from "react"
import {Preloader} from '../common/Preloader/Preloader';


export function lazyLoader<T>(Component: React.ComponentType<T>) {
  return (props: T) => (
    <Suspense fallback={<Preloader/>}>
      <Component {...props}/>
    </Suspense>
  )
}
