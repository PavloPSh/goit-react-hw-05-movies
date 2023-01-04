import { useState } from "react"

export const Searchbar = ({value, onSubmit}) => {

    const [search, setSearch] = useState(value);

    const handleChange = (e) => {
        const { value } = e.target;
        setSearch(value);
    };

    const handleSubmit = (e) => {
        
        e.preventDefault();

            if (search.trim() === '') {
                return window.alert('nope')
            };

        onSubmit(search.trim());
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    name='search'
                    value={search}
                    placeholder='Search movie'
                    type="text"
                    autoComplete='off'
                    autoFocus
                    />
                
                <button type="submit">Search</button>
            </form>
        </>
    )
}