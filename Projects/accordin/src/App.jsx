import React from 'react'
import Accordin from './Accordin'
const App = () => {
  const items = [
    {
      "title":"Title1",
      "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis vulputate augue, et sollicitudin elit semper ut. Sed risus ante, cursus non ex eget, aliquam imperdiet tellus. Praesent non cursus mauris. In vitae enim vitae sapien eleifend molestie. Fusce suscipit at justo vel lobortis. Fusce mattis, diam eu semper tincidunt, mi enim blandit neque, quis vestibulum lorem tellus quis ex. Maecenas sed varius dolor. Nullam tincidunt laoreet ante id condimentum. Quisque non feugiat nisl. Proin mattis urna faucibus mi ultrices, eget vestibulum mauris dignissim. Phasellus est nisi, scelerisque ac volutpat eget, sodales sit amet dui.",
    },
    {
      "title":"Title2",
      "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis vulputate augue, et sollicitudin elit semper ut. Sed risus ante, cursus non ex eget, aliquam imperdiet tellus. Praesent non cursus mauris. In vitae enim vitae sapien eleifend molestie. Fusce suscipit at justo vel lobortis. Fusce mattis, diam eu semper tincidunt, mi enim blandit neque, quis vestibulum lorem tellus quis ex. Maecenas sed varius dolor. Nullam tincidunt laoreet ante id condimentum. Quisque non feugiat nisl. Proin mattis urna faucibus mi ultrices, eget vestibulum mauris dignissim. Phasellus est nisi, scelerisque ac volutpat eget, sodales sit amet dui.",
    },
    {
      "title":"Title3",
      "content":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis vulputate augue, et sollicitudin elit semper ut. Sed risus ante, cursus non ex eget, aliquam imperdiet tellus. Praesent non cursus mauris. In vitae enim vitae sapien eleifend molestie. Fusce suscipit at justo vel lobortis. Fusce mattis, diam eu semper tincidunt, mi enim blandit neque, quis vestibulum lorem tellus quis ex. Maecenas sed varius dolor. Nullam tincidunt laoreet ante id condimentum. Quisque non feugiat nisl. Proin mattis urna faucibus mi ultrices, eget vestibulum mauris dignissim. Phasellus est nisi, scelerisque ac volutpat eget, sodales sit amet dui.",
    },
  ]
  return (
    <div>
      <Accordin items={items} />
    </div>
  )
}

export default App
