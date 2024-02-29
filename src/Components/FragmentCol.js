import React from 'react'

function FragmentCol() {
  return (
  /**
   *! <div> <td>Name</td><td>Bavneet</td> </div>--will show error in console because <div> tag cannot be parent tag
   *? to solve this error we will use fragments--<React.Fragment> </React.Fragment> or <></>
   */
  <>
  <td>Name</td>
  <td>Bavneet</td>
  </>
  )
}

export default FragmentCol
