import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    projects: [],
    isLoading: true,
};

// Async thunk to fetch initial projects from the server
export const fetchInitialProjects = createAsyncThunk("projects/fetchInitialProjects", async () => {
    try {
        if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
        const response = await axios.get(
            'https://de-4sy0.onrender.com/api/v1/getprojects',
            // 'http://localhost:3030/api/v1/getprojects',
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
            'https://de-4sy0.onrender.com/api/v1/createproject',
            // 'http://localhost:3030/api/v1/createproject',
            project,
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("X-access-token")
                }
            }
        );
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
});

// Async thunk to delete a project
export const deleteProject = createAsyncThunk("projects/deleteProject", async (projectId) => {
    try {
        if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
        const response = await axios.post(
            'https://de-4sy0.onrender.com/api/v1/deleteproject',
            // 'http://localhost:3030/api/v1/deleteproject',
            { projectId },
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("X-access-token")
                }
            }
        );
        console.log(response.data.data)
        return response.data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
});

// Async thunk to update a project
export const updateProject = createAsyncThunk("projects/updateProject", async (projectId, { getState }) => {
    try {
        if (localStorage.getItem("X-access-token") == null) throw new Error("Token not found");
        const { projectsReducer } = getState();
        const project = projectsReducer.projects.find(project => project._id === projectId);
        const response = await axios.post(
            'https://de-4sy0.onrender.com/api/v1/updateproject',
            // 'http://localhost:3030/api/v1/updateproject',
            project,
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("X-access-token")
                }
            }
        );
        console.log(response.data.data)
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
    },
    extraReducers: (builder) => {

        //* Manage Loading State for fetchInitialProjects
        builder.addCase(fetchInitialProjects.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchInitialProjects.fulfilled, (state, action) => {
            state.projects = action.payload;
            state.isLoading = false;
        });
        builder.addCase(fetchInitialProjects.rejected, (state) => {
            state.isLoading = false;
        });

        //* Manage Loading State for createNewProject
        builder.addCase(createNewProject.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createNewProject.fulfilled, (state, action) => {
            state.projects.push(action.payload);
            state.isLoading = false;
        });
        builder.addCase(createNewProject.rejected, (state) => {
            state.isLoading = false;
        });

        //* Manage Loading State for deleteProject
        builder.addCase(deleteProject.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(deleteProject.fulfilled, (state, action) => {
            state.projects = state.projects.filter(project => project._id !== action.payload);
            state.isLoading = false;
        });
        builder.addCase(deleteProject.rejected, (state) => {
            state.isLoading = false;
        });

        //* Manage Loading State for updateProject
        builder.addCase(updateProject.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateProject.fulfilled, (state, action) => {
            state.isLoading = false;
            toast.success("Saved Successfully");
        });
        builder.addCase(updateProject.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

export const { updateStickyColor, updateStickyCount, updateStickyData, setInitialProjects } = projectsSlice.actions;
export default projectsSlice.reducer;