import React from 'react'
import { useLocation } from 'react-router-dom';
import { CanvasCard } from '../../components';
import { BsPatchPlusFill } from 'react-icons/bs';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useMutation, useQuery } from 'react-query';
import { getProject, giveProjectAccess, removeProjectAccess } from '../../utils/projectApis';
import { toast } from 'react-toastify';
import BackButton from '../../components/BackButton/BackButton.jsx';


function Project() {

    const [isAccessFormVisible, setIsAccessFormVisible] = React.useState(false);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const projectId = searchParams.get('id');

    const [accessList, setAccessList] = React.useState([]);
    const [project, setProject] = React.useState([]);

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['project-all'],
        queryFn: () => getProject({ projectId }),
        onSuccess: (data) => {
            setAccessList(data.members);
            setProject(data);
        }
    })

    function AddAccessForm() {

        const [email, setEmail] = React.useState('');
        // const [accessListLoading, setAccessListLoading] = React.useState(false);

        const giveAccessMutation = useMutation({
            mutationKey: ['give-access'],
            mutationFn: () => giveProjectAccess({ _id: project._id, email }),
            onSuccess: () => {
                setEmail('')
                toast.success('Access given successfully!')
                setAccessList([...accessList, email])
            },
            onError: (error) => {
                toast.error(`Something went wrong: ${error.response.data.err.message}`)
            }
        })

        const removeAccessMutation = useMutation({
            mutationKey: ['remove-access'],
            mutationFn: ({ email }) => removeProjectAccess({ _id: project._id, email }),
            onSuccess: (data) => {
                toast.success('Access removed successfully!')
                setAccessList(accessList.filter((email) => email !== data.email))
            },
            onError: (error) => {
                toast.error(`Something went wrong: ${error.response.data.err.message}`)
            }
        })

        return (
            <>
                <form className='form relative'>
                    <div className='absolute top-2 right-2 text-2xl cursor-pointer text-red-500' onClick={() => { setIsAccessFormVisible(false) }}>
                        <AiFillCloseCircle />
                    </div>
                    <div className='flex-column'>
                        <label>Email</label>
                    </div>
                    <div className='inputForm'>
                        <input
                            placeholder='Email Of The User'
                            className='input'
                            type='text'
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                        />
                    </div>
                    <button
                        onClick={(event) => {
                            event.preventDefault();
                            giveAccessMutation.mutate();
                        }}
                        className={`button-submit ${giveAccessMutation.isLoading && 'cursor-wait'}`}
                        disabled={giveAccessMutation.isLoading}
                    >
                        {giveAccessMutation.isLoading ? 'Giving Access...' : 'Give Access'}
                    </button>
                    <div>
                        <p className='text-sm text-gray-400 mb-3 text-center'>Note: The user will be able to view and edit the project.</p>
                        <div className="flex flex-col">
                            <label className="text-xl font-bold mb-2">Access List</label>
                            {
                                accessList.length === 0 ? (
                                    <p className="text-gray-400">No one has access to this project yet.</p>
                                ) : (
                                    <ul>
                                        {accessList.map((email) => (
                                            <li key={email} className="flex items-center justify-between space-x-2 mb-2">
                                                <span>{email}</span>
                                                <button
                                                    className={`px-2 py-1 bg-red-500 text-white rounded ${giveAccessMutation.isLoading && 'cursor-wait'}`}
                                                    onClick={(event) => {
                                                        event.preventDefault();
                                                        removeAccessMutation.mutate({ email });
                                                    }}
                                                    disabled={removeAccessMutation.isLoading}
                                                >
                                                    {removeAccessMutation.isLoading ? 'Removing...' : 'Remove'}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                )
                            }

                        </div>
                    </div>
                </form>
            </>
        )
    }



    if (isLoading) return (
        <div className='flex w-screen h-screen justify-center items-center'>
            Loading....
        </div>
    )

    if (isError) return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <p className='text-4xl font-bold text-gray-600'>Oops, Something went wrong!</p>
            <p className='text-lg text-gray-400'>{error.message}</p>
        </div>
    )


    // const project = data;


    return (

        !project ? (
            <div className='w-screen h-screen flex flex-col justify-center items-center'>
                <div className='absolute top-20 left-0'>
                    <BackButton backPath={'/'} />
                </div>
                <p className='text-4xl font-bold text-gray-600'>Project Not Found</p>
                <p className='text-lg text-gray-400'>The requested project does not exist.</p>
            </div>
        ) : (
            <>
                <div className='w-screen h-screen flex justify-center flex-wrap'>
                    <div className='absolute top-20 left-0'>
                        <BackButton backPath={'/'} />
                    </div>
                    <CanvasCard projectId={projectId} canvasName={"AEIOU"} />
                    <CanvasCard projectId={projectId} canvasName={"Empathy"} />
                    <CanvasCard projectId={projectId} canvasName={"Ideation"} />
                    <CanvasCard projectId={projectId} canvasName={"Product Development"} />
                    <CanvasCard projectId={projectId} canvasName={"Business Model"} />
                    <CanvasCard projectId={projectId} canvasName={"LNM"} />
                </div>

                {
                    isAccessFormVisible &&
                    <div className='absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center mt-[70px]'>
                        <AddAccessForm />
                    </div>
                }

                <button
                    className='w-[60px] h-[60px] text-3xl bg-[#1a1a1a] hover:bg-[#444141] text-white absolute top-20 rounded-l-[50%] right-0 flex justify-center items-center text-blue-400'
                    onClick={() => {
                        setIsAccessFormVisible(!isAccessFormVisible);
                    }}
                >
                    {isAccessFormVisible &&
                        <div className='text-3xl cursor-pointer text-red-500'>
                            <AiFillCloseCircle />
                        </div>
                    }
                    {!isAccessFormVisible && <BsPatchPlusFill />}
                </button>

            </>
        )
    )
}

export default Project