export default function App() {
  const handleSubmit = () => {}

  return (
    <div>
      <h1>Buat Daftar Pustaka dengan mudah Disini</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">
            <b>Tipe Dokumen</b>
          </label>{' '}
          <br />
          <select name="type" id="type">
            <option value="book">Buku</option>
          </select>
        </div>
        <div>
          <label htmlFor="authors">
            <b>Nama Penulis</b>
          </label>{' '}
          <br />
          <input type="text" name="authors" id="authors" />
        </div>
        <div>
          <label htmlFor="year">
            <b>Tahun Terbit</b>
          </label>
          <br />
          <input type="text" name="year" id="year" />
        </div>
        <div>
          <label htmlFor="title">
            <b>Judul Buku</b>
          </label>
          <br />
          <input type="text" name="title" id="title" />
        </div>
        <div>
          <label htmlFor="city">
            <b>Tempat Terbit</b>
          </label>
          <br />
          <input type="text" name="city" id="city" />
        </div>
        <div>
          <label htmlFor="publisher">
            <b>Nama Penerbit</b>
          </label>
          <br />
          <input type="text" name="publisher" id="publisher" />
        </div>
        <div>
          <button type="submit">Generate Bibliography</button>
        </div>
      </form>
    </div>
  )
}
