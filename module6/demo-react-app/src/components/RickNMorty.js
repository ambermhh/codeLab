import React from "react";

function RickNMorty() {
  const [ricknMorty, setRickNMorty] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1)
  const [filterType, setFilterType] = React.useState("")
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {

    const filterParam = filterType === "" ? "" : '&by_type=' + filterType;

    console.log('getting ' + filterType + ' page number ' + currentPage )
    setIsLoading(true)


    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((jsonData) => {
        setRickNMorty(jsonData.results);
        setIsLoading(false)
        console.log(jsonData);
      });
  }, [currentPage, filterType])

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage)
  }

  const handleChangeFilter = (newFilter) => {
    setFilterType(newFilter)
  }

  return (
    <div>
    <div className="ricknmorty componentBox">
      <h1>Rick & Morty</h1>
    <TypeFilter selectedFilter={filterType} onFilterChange={handleChangeFilter} />
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <ul>
          {ricknMorty.map((character) => (
            <li className="ricklist" key={character.id}>
              <div className="card">
                <img src={character.image} alt="" />
                <div className="card-body">
                  <h2 className="card-title">
                    {character.name}({character.species})
                  </h2>
                  <h4 className="card-text">Status: {character.status}</h4>
                  <h4 className="card-text">
                    Location: {character.location.name}
                  </h4>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
      <br></br>
      <button className="button" onClick={() => handleChangePage(currentPage + 1)}></button>
</div>
</div>
)}

function TypeFilter(props) {

    const handleFilterChange = (e) => {
        const selectedFilter = e.target.value;
        props.onFilterChange(selectedFilter);
    }

    return (

        <div className="TypeFilter">
            <select name="filtertype" value={props.selectedFilter} onChange={handleFilterChange}>
                <option value="">Choose an option</option>
                <option value="status">Status</option>
                <option value="species">Species</option>
            </select>

        </div>
    )
}

export { RickNMorty as default, TypeFilter }
