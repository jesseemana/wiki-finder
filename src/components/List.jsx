import useSwr from 'swr'
import { getSearchResults } from '../api/wikiApi';
import { Item } from './Item';

export const List = ( { searchTerm } ) => {
    const { isLoading, error, data } = useSwr( searchTerm ? searchTerm : null, getSearchResults );

    let content
    if ( isLoading ) return content = <div>Loading...</div>
    else if ( error ) return content = <div>{ error.message }</div>;
    else if( data?.query?.pages ){
        const results = data?.query?.pages;

        // CONVERTING THE RESULTS OBJECTS INTO AN ARRAY 
        const queryData = Object.values( results );
        content = (
            <ul>
                { queryData.map( ( result ) =>
                {
                    return <Item key={ result.pageid } result={ result } />
                })}
            </ul>
        )
    }

    return content

};
