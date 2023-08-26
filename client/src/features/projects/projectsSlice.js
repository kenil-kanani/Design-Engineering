import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    projects: [],
    isLoading: true,
};

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

// Async thunk to create a new project
export const createNewProject = createAsyncThunk("projects/createNewProject", async (project) => {
    try {
        if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
        const response = await axios.post(
            'http://localhost:3030/api/v1/createproject',
            project,
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
            const project = state.projects.find(project => project._id === projectId);
            project.canvases[canvasId][divId].data[dataIndex] = newData;
        },
        updateStickyCount: (state, action) => {
            const { projectId, canvasId, divId, newCount } = action.payload;

            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project._id === projectId) {
                        return {
                            ...project,
                            canvases: {
                                ...project.canvases,
                                [canvasId]: {
                                    ...project.canvases[canvasId],
                                    [divId]: {
                                        ...project.canvases[canvasId][divId],
                                        stickyCount: newCount
                                    }
                                }
                            }
                        };
                    }
                    return project;
                })
            };
        },
        updateStickyColor: (state, action) => {
            const { projectId, canvasId, divId, newColor } = action.payload;

            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project._id === projectId) {
                        return {
                            ...project,
                            canvases: {
                                ...project.canvases,
                                [canvasId]: {
                                    ...project.canvases[canvasId],
                                    [divId]: {
                                        ...project.canvases[canvasId][divId],
                                        color: newColor
                                    }
                                }
                            }
                        };
                    }
                    return project;
                })
            };
        },
        updateStickyData: (state, action) => {
            const { projectId, canvasId, divId, stickyNoteIndex, newData } = action.payload;

            return {
                ...state,
                projects: state.projects.map(project => {
                    if (project._id === projectId) {
                        return {
                            ...project,
                            canvases: {
                                ...project.canvases,
                                [canvasId]: {
                                    ...project.canvases[canvasId],
                                    [divId]: {
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
                })
            };
        },
        setInitialProjects: (state, action) => {
            return {
                isLoading: state.isLoading,
                projects: action.payload
            };
        },
        updateProjectById: (state, action) => {
            try {
                const { projectId } = action.payload;
                const project = state.projects.find(project => project._id === projectId);

                const response = axios.post(
                    `http://localhost:3030/api/v1/updateproject`,
                    project,
                    {
                        headers: {
                            "Authorization": "Bearer " + localStorage.getItem("X-access-token")
                        }
                    }
                );
            } catch (error) {
                console.log(error)
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchInitialProjects.pending, (state) => {
            state.isLoading = true;
            // console.log("1")
        });
        builder.addCase(fetchInitialProjects.fulfilled, (state, action) => {
            // console.log("2")
            state.projects = action.payload;
            state.isLoading = false; // Set loading state to false when the async action is fulfilled
        });
        builder.addCase(fetchInitialProjects.rejected, (state) => {
            state.isLoading = false; // Set loading state to false when the async action is rejected
        });
    },
});

export const { updateStickyColor, updateStickyCount, updateStickyData, setInitialProjects, updateProjectById } = projectsSlice.actions;
export default projectsSlice.reducer;