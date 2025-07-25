import React from 'react'

const Empaty = () => {
  window.scrollTo(0, 0)
  return (
    <section className="container min-h-[50vh] text-4xl flex items-center">
      No Date :(
    </section>
  )
}

export default React.memo(Empaty)
