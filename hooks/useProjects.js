import useSWR from 'swr';



export const useProjects = (url, config = {} ) => {

    const { data, error } = useSWR(`/api${ url }`, config );
    return {
        projects: data || [],
        isLoading: !error && !data,
        isError: error
    }

}