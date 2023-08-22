import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        _id: '1',
        owner_id: '1',
        project_name: 'Project 1',
        canvases: {
            aeiou: {
                environment: {
                    stickyCount: 1,
                    stickyColor: '#00DFA2',
                    data: ["a", "e", "i", "o", "u"]
                },
                interaction: {
                    stickyCount: 5,
                    stickyColor: '#F6FA70',
                    data: ["a", "e", "i", "o", "u"]
                },
                objects: {
                    stickyCount: 5,
                    stickyColor: '#FBB454',
                    data: ["a", "e", "i", "o", "u"]
                },
                activity: {
                    stickyCount: 5,
                    stickyColor: '#79E0EE',
                    data: ["a", "e", "i", "o", "u"]
                },
                users: {
                    stickyCount: 5,
                    stickyColor: '#98EECC',
                    data: ["a", "e", "i", "o", "u"]
                }
            }
        }
    },
    {
        _id: '2',
        owner_id: '1',
        project_name: 'Project 1',
        canvases: {
            aeiou: {
                environment: {
                    stickyCount: 2,
                    stickyColor: '#00DFA2',
                    data: ["a", "e", "i", "o", "u"]
                },
                interaction: {
                    stickyCount: 5,
                    stickyColor: '#F6FA70',
                    data: ["a", "e", "i", "o", "u"]
                },
                objects: {
                    stickyCount: 5,
                    stickyColor: '#FBB454',
                    data: ["a", "e", "i", "o", "u"]
                },
                activity: {
                    stickyCount: 5,
                    stickyColor: '#79E0EE',
                    data: ["a", "e", "i", "o", "u"]
                },
                users: {
                    stickyCount: 5,
                    stickyColor: '#98EECC',
                    data: ["a", "e", "i", "o", "u"]
                }
            }
        }
    },
    {
        _id: '3',
        owner_id: '1',
        project_name: 'Project 1',
        canvases: {
            aeiou: {
                environment: {
                    stickyCount: 3,
                    stickyColor: '#00DFA2',
                    data: ["a", "e", "i", "o", "u"]
                },
                interaction: {
                    stickyCount: 5,
                    stickyColor: '#F6FA70',
                    data: ["a", "e", "i", "o", "u"]
                },
                objects: {
                    stickyCount: 5,
                    stickyColor: '#FBB454',
                    data: ["a", "e", "i", "o", "u"]
                },
                activity: {
                    stickyCount: 5,
                    stickyColor: '#79E0EE',
                    data: ["a", "e", "i", "o", "u"]
                },
                users: {
                    stickyCount: 5,
                    stickyColor: '#98EECC',
                    data: ["a", "e", "i", "o", "u"]
                }
            }
        }
    }
];

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


    }
});

export const { updateStickyColor, updateStickyCount } = projectsSlice.actions;
export default projectsSlice.reducer;