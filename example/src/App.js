import React from 'react'

import { ExampleComponent, Button } from 'btnkax2n'
import 'btnkax2n/dist/index.css'

const App = () => {
  return (
    <>
      <ExampleComponent text="Merhaba" />
      <Button
        text="Click for Primary"
        type="grey"
        onClick={() => alert("You chose the primary one")}
      />
      <Button
        text="Click for Default"
        type="grey"
        onClick={() => alert("You chose the default one")}
      />
      <Button
        text="Click for Dashed"
        type="grey"
        onClick={() => alert("You chose the dashed one")}
      />
      <Button
        text="Click for Test"
        type="grey"
        onClick={() => alert("You chose the test one")}
      />
      <Button
        text="Click for Link"
        type="grey"
        onClick={() => alert("You chose the link one")}
      />
    </>
  )
}

export default App
