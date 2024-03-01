import { useLocation } from "react-router-dom";
import { useQuery, useMutation } from 'react-query';
import { getCanvasData, updateCanvasData } from "../utils/projectApis";
import { useState } from "react";
import { toast } from "react-toastify";

function useCanvas(canvasName) {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('id');
    const [canvas, setCanvas] = useState(null);


    const { isLoading, isError, error } = useQuery({
        queryKey: ['project-aeiou-get'],
        queryFn: () => getCanvasData({ projectId, canvasName }),
        staleTime: Infinity,
        onSuccess: (data) => setCanvas(data)
    })

    const mutation = useMutation(
        {
            mutationKey: ['project-aeiou-update'],
            mutationFn: () => updateCanvasData({ projectId, canvasName, canvas }),
            staleTime: Infinity,
            onSuccess: () => toast.success("Project Updated Successfully"),
            onError: (error) => toast.error(`Something went wrong: ${error.message}`),
        }
    )

    const saveHandler = (e) => {
        mutation.mutate()
    }

    return { isLoading, isError, error, canvas, setCanvas, saveHandler, mutation, projectId }
}

export default useCanvas;