import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = [
//     {
//         _id: '1',
//         owner_id: '1',
//         project_name: 'Project 1',
//         canvases: {
//             aeiou: {
//                 environment: {
//                     stickyCount: 1,
//                     stickyColor: '#00DFA2',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 interaction: {
//                     stickyCount: 5,
//                     stickyColor: '#F6FA70',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 objects: {
//                     stickyCount: 5,
//                     stickyColor: '#FBB454',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 activity: {
//                     stickyCount: 5,
//                     stickyColor: '#79E0EE',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 users: {
//                     stickyCount: 5,
//                     stickyColor: '#98EECC',
//                     data: ["a", "e", "i", "o", "u"]
//                 }
//             }
//         }
//     },
//     {
//         _id: '2',
//         owner_id: '1',
//         project_name: 'Project 1',
//         canvases: {
//             aeiou: {
//                 environment: {
//                     stickyCount: 2,
//                     stickyColor: '#00DFA2',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 interaction: {
//                     stickyCount: 5,
//                     stickyColor: '#F6FA70',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 objects: {
//                     stickyCount: 5,
//                     stickyColor: '#FBB454',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 activity: {
//                     stickyCount: 5,
//                     stickyColor: '#79E0EE',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 users: {
//                     stickyCount: 5,
//                     stickyColor: '#98EECC',
//                     data: ["a", "e", "i", "o", "u"]
//                 }
//             }
//         }
//     },
//     {
//         _id: '3',
//         owner_id: '1',
//         project_name: 'Project 1',
//         canvases: {
//             aeiou: {
//                 environment: {
//                     stickyCount: 3,
//                     stickyColor: '#00DFA2',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 interaction: {
//                     stickyCount: 5,
//                     stickyColor: '#F6FA70',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 objects: {
//                     stickyCount: 5,
//                     stickyColor: '#FBB454',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 activity: {
//                     stickyCount: 5,
//                     stickyColor: '#79E0EE',
//                     data: ["a", "e", "i", "o", "u"]
//                 },
//                 users: {
//                     stickyCount: 5,
//                     stickyColor: '#98EECC',
//                     data: ["a", "e", "i", "o", "u"]
//                 }
//             }
//         }
//     }
// ];

const initialState = [];

// Async thunk to fetch initial projects from the server
export const fetchInitialProjects = createAsyncThunk("projects/fetchInitialProjects", async () => {
    try {
        if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
        const response = await axios.get(
            'http://localhost:3030/api/v1/getprojects',
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("X-access-token")
                }
            }
        );
        return response.data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
});

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        updateData: (state, action) => {
            const { projectId, canvasId, divId, newData, dataIndex } = action.payload;
            const project = state.find(project => project._id === projectId);
            project.canvases[canvasId][divId].data[dataIndex] = newData;
        },
        updateStickyCount: (state, action) => {
            const { projectId, canvasId, divId, newCount } = action.payload;

            return state.map(project => {
                if (project._id === projectId) {
                    return {
                        ...project,
                        canvases: {
                            ...project.canvases,
                            [canvasId]: {
                                ...project.canvases[canvasId],
                                [divId]: {  // Use divId here to make it dynamic
                                    ...project.canvases[canvasId][divId],
                                    stickyCount: newCount
                                }
                            }
                        }
                    };
                }
                return project;
            });
        },
        updateStickyColor: (state, action) => {
            const { projectId, canvasId, divId, newColor } = action.payload;

            return state.map(project => {
                if (project._id === projectId) {
                    return {
                        ...project,
                        canvases: {
                            ...project.canvases,
                            [canvasId]: {
                                ...project.canvases[canvasId],
                                [divId]: {  // Use divId here to make it dynamic
                                    ...project.canvases[canvasId][divId],
                                    stickyColor: newColor
                                }
                            }
                        }
                    };
                }
                return project;
            });
        },
        updateStickyData: (state, action) => {
            const { projectId, canvasId, divId, stickyNoteIndex, newData } = action.payload;
            return state.map(project => {
                if (project._id === projectId) {
                    return {
                        ...project,
                        canvases: {
                            ...project.canvases,
                            [canvasId]: {
                                ...project.canvases[canvasId],
                                [divId]: {  // Use divId here to make it dynamic
                                    ...project.canvases[canvasId][divId],
                                    data: project.canvases[canvasId][divId].data.map((data, index) => {
                                        if (index === stickyNoteIndex) {
                                            return newData;
                                        }
                                        return data;
                                    })
                                }
                            }
                        }
                    };
                }
                return project;
            });
        },
        setInitialProjects: (state, action) => {
            console.log("State : ", state, "Ac.paylode : ", action.payload)
            return action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInitialProjects.fulfilled, (state, action) => {
            // Update the state with the fetched data
            return action.payload;
        });
    },
});

export const { updateStickyColor, updateStickyCount, updateStickyData, setInitialProjects } = projectsSlice.actions;
export default projectsSlice.reducer;