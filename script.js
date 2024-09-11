document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM fully loaded and parsed');
    const newTaskButton = document.getElementById('new-task-button');
    const newTaskButtonMobile = document.getElementById('new-task-button-mobile');
    console.log('Buttons defined:', newTaskButton, newTaskButtonMobile);
    const taskModal = document.getElementById('task-modal');
    const cancelButton = document.getElementById('cancel-button');
    const taskForm = document.getElementById('task-form');
    const editTaskModal = document.getElementById('edit-task-modal');
    const editCancelButton = document.getElementById('edit-cancel-button');
    const editTaskForm = document.getElementById('edit-task-form');
    const columns = document.querySelectorAll('.column');

    const taskTitle = document.getElementById('task-title');
    const taskDescription = document.getElementById('task-description');
    const taskAssigned = document.getElementById('task-assigned');
    const taskPriority = document.getElementById('task-priority');
    const taskStatus = document.getElementById('task-status');
    const taskDeadline = document.getElementById('task-deadline');

    const editTaskTitle = document.getElementById('edit-task-title');
    const editTaskDescription = document.getElementById('edit-task-description');
    const editTaskAssigned = document.getElementById('edit-task-assigned');
    const editTaskPriority = document.getElementById('edit-task-priority');
    const editTaskStatus = document.getElementById('edit-task-status');
    const editTaskDeadline = document.getElementById('edit-task-deadline');
    const eliminarTask = document.getElementById('eliminar-tarea');
    const eliminarConfirmarModal = document.getElementById('confirmar-eliminar');
    const siEliminar = document.getElementById('si-eliminar');
    const noEliminar = document.getElementById('no-eliminar');


    await loadTasks(); 
    let currentTaskDiv = null;
    console.log('loadTasks function called');

    newTaskButton.addEventListener('click', () => {
        clearForm();
        taskModal.classList.add('is-active');
    });

    newTaskButtonMobile.addEventListener('click', () => {
        clearForm();
        taskModal.classList.add('is-active');
    });

    cancelButton.addEventListener('click', closeModal);
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    editCancelButton.addEventListener('click', closeEditModal);
    document.getElementById('edit-modal-close').addEventListener('click', closeEditModal);

    function closeModal() {
        taskModal.classList.remove('is-active');
    }

    function closeEditModal() {
        editTaskModal.classList.remove('is-active');
    }

    function closeConfirmModal() {
        eliminarConfirmarModal.classList.remove('is-active');
    }

    async function loadTasks() {
        try {
            console.log('Attempting to fetch tasks from the server...'); // Debugging
            const response = await fetch('http://localhost:3000/tasks'); 
            console.log('Response status:', response.status); // Debugging
            if (response.ok) {
                const tasks = await response.json();
                console.log('Fetched tasks:', tasks); // Debugging
    
                tasks.forEach(task => {
                    const taskDiv = document.createElement('div');
                    taskDiv.className = 'box';
                    taskDiv.setAttribute('data-id', task.id);
                    taskDiv.setAttribute('data-title', task.title);
                    taskDiv.setAttribute('data-description', task.description);
                    taskDiv.setAttribute('data-assigned', task.assignedTo);
                    taskDiv.setAttribute('data-priority', task.priority);
                    taskDiv.setAttribute('data-status', task.status);
                    taskDiv.setAttribute('data-deadline', task.endDate);
                    taskDiv.setAttribute('draggable', 'true');
                    taskDiv.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p>`;
    
                    const column = document.getElementById(task.status);
                    if (column) {
                        column.querySelector('.task-list-content').appendChild(taskDiv);
    
                        taskDiv.addEventListener('dragstart', () => {
                            taskDiv.classList.add('is-dragging');
                        });
    
                        taskDiv.addEventListener('dragend', () => {
                            taskDiv.classList.remove('is-dragging');
                            saveTasks();
                        });
    
                        taskDiv.addEventListener('click', () => openEditModal(taskDiv));
                    }
                });
            } else {
                console.error('Error fetching tasks:', response.statusText);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }
    

    newTaskButton.addEventListener('click', () => {
        clearForm();
        taskModal.classList.add('is-active');
    });

    newTaskButtonMobile.addEventListener('click', () => {
        clearForm();
        taskModal.classList.add('is-active');
    });

    cancelButton.addEventListener('click', closeModal);
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    editCancelButton.addEventListener('click', closeEditModal);
    document.getElementById('edit-modal-close').addEventListener('click', closeEditModal);

    function closeModal() {
        taskModal.classList.remove('is-active');
    }

    function closeEditModal() {
        editTaskModal.classList.remove('is-active');
    }

    function closeConfirmModal() {
        eliminarConfirmarModal.classList.remove('is-active');
    }

    async function loadTasks() {
        try {
            const response = await fetch('http://localhost:3000/api/tasks');
            if (response.ok) {
                const tasks = await response.json();

                tasks.forEach(task => {
                    const taskDiv = document.createElement('div');
                    taskDiv.className = 'box';
                    taskDiv.setAttribute('data-id', task.id);
                    taskDiv.setAttribute('data-title', task.title);
                    taskDiv.setAttribute('data-description', task.description);
                    taskDiv.setAttribute('data-assigned', task.assignedTo);
                    taskDiv.setAttribute('data-priority', task.priority);
                    taskDiv.setAttribute('data-status', task.status);
                    taskDiv.setAttribute('data-deadline', task.endDate);
                    taskDiv.setAttribute('draggable', 'true');
                    taskDiv.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p>`;

                    const column = document.getElementById(task.status);
                    if (column) {
                        column.querySelector('.task-list-content').appendChild(taskDiv);

                        taskDiv.addEventListener('dragstart', () => {
                            taskDiv.classList.add('is-dragging');
                        });

                        taskDiv.addEventListener('dragend', () => {
                            taskDiv.classList.remove('is-dragging');
                            saveTasks();
                        });

                        taskDiv.addEventListener('click', () => openEditModal(taskDiv));
                    }
                });
            } else {
                console.error('Error fetching tasks:', response.statusText);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    }


    newTaskButton.addEventListener('click', () => {
        clearForm();
        taskModal.classList.add('is-active');
    });

    newTaskButtonMobile.addEventListener('click', () => {
        clearForm();
        taskModal.classList.add('is-active');
    });

    cancelButton.addEventListener('click', closeModal);
    document.querySelector('.modal-close').addEventListener('click', closeModal);
    editCancelButton.addEventListener('click', closeEditModal);
    document.getElementById('edit-modal-close').addEventListener('click', closeEditModal);

    function closeModal() {
        taskModal.classList.remove('is-active');
    }

    function closeEditModal() {
        editTaskModal.classList.remove('is-active');
    }

    function closeConfirmModal() {
        eliminarConfirmarModal.classList.remove('is-active');
    }

    taskForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const taskData = {
            title: taskTitle.value,
            description: taskDescription.value,
            assigned: taskAssigned.value,
            priority: taskPriority.value,
            status: taskStatus.value,
            deadline: taskDeadline.value,
        };
    
        try {
            const response = await fetch('http://localhost:3000/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(taskData),
            });
    
            if (response.ok) {
                const createdTask = await response.json();
                const taskDiv = document.createElement('div');
                taskDiv.className = 'box';
                taskDiv.setAttribute('data-id', createdTask.id);
                taskDiv.innerHTML = `<strong>${createdTask.title}</strong><p>${createdTask.description}</p>`;
    
                const column = document.getElementById(createdTask.status);
                column.querySelector('.task-list-content').appendChild(taskDiv);
    
                taskDiv.addEventListener('dragstart', () => {
                    taskDiv.classList.add('is-dragging');
                });
    
                taskDiv.addEventListener('dragend', () => {
                    taskDiv.classList.remove('is-dragging');
                });
    
                taskDiv.addEventListener('click', () => openEditModal(taskDiv));
    
                closeModal();
            } else {
                console.error('Error creating task:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error);
        }
    });
    

    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            const afterElement = getDragAfterElement(column, e.clientY);
            const taskList = column.querySelector('.task-list-content');
            const draggingTask = document.querySelector('.is-dragging');
            if (afterElement == null) {
                taskList.appendChild(draggingTask);
            } else {
                taskList.insertBefore(draggingTask, afterElement);
            }
        });

        column.addEventListener('drop', (e) => {
            const draggingTask = document.querySelector('.is-dragging');
            if (draggingTask) {
                const newStatus = column.id;
                draggingTask.setAttribute('data-status', newStatus);
                saveTasks(); 
            }
        });
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('.box:not(.is-dragging)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    function openEditModal(taskDiv) {
        currentTaskDiv = taskDiv;
        editTaskTitle.value = taskDiv.getAttribute('data-title');
        editTaskDescription.value = taskDiv.getAttribute('data-description');
        editTaskAssigned.value = taskDiv.getAttribute('data-assigned');
        editTaskPriority.value = taskDiv.getAttribute('data-priority');
        editTaskStatus.value = taskDiv.getAttribute('data-status');
        editTaskDeadline.value = taskDiv.getAttribute('data-deadline');
        editTaskModal.classList.add('is-active');
    }

    editTaskForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formatDate = (date) => {
            if (!date) return ''; 
            const parsedDate = new Date(date);
            if (isNaN(parsedDate.getTime())) {
                console.error(`Error: Invalid date format received: ${date}`);
                return '';
            }
            return parsedDate.toISOString().split('T')[0];
        };
    
        const formattedDeadline = formatDate(editTaskDeadline.value.trim());
        console.log('Raw deadline value:', editTaskDeadline.value.trim()); // Debugging
        console.log('Formatted deadline value:', formattedDeadline); // Debugging
    
        const updatedTaskData = {
            title: editTaskTitle.value.trim(),
            description: editTaskDescription.value.trim(),
            assigned: editTaskAssigned.value.trim(),
            priority: editTaskPriority.value.trim(),
            status: editTaskStatus.value.trim() || currentTaskDiv.getAttribute('data-status'), // Retain previous status if empty
            deadline: formattedDeadline,
        };
    
        if (!updatedTaskData.title) {
            console.error('Error: El título es un campo obligatorio.');
            alert('Por favor, proporcione un título para la tarea.');
            return;
        }
    
        const taskId = currentTaskDiv.getAttribute('data-id'); 
    
        try {
            const response = await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTaskData),
            });
    
            if (response.ok) {
                if (response.headers.get('Content-Length') === '0' || response.status === 204) {
                    console.log('La tarea se actualizó correctamente, pero no se recibió contenido en la respuesta del servidor.');
                    currentTaskDiv.setAttribute('data-title', updatedTaskData.title);
                    currentTaskDiv.setAttribute('data-description', updatedTaskData.description);
                    currentTaskDiv.setAttribute('data-assigned', updatedTaskData.assigned);
                    currentTaskDiv.setAttribute('data-priority', updatedTaskData.priority);
                    currentTaskDiv.setAttribute('data-status', updatedTaskData.status);
                    currentTaskDiv.setAttribute('data-deadline', formattedDeadline);
                    currentTaskDiv.innerHTML = `<strong>${updatedTaskData.title}</strong><p>${updatedTaskData.description}</p>`;
    
                    const column = document.getElementById(updatedTaskData.status);
                    if (column) {
                        column.querySelector('.task-list-content').appendChild(currentTaskDiv);
                    }
    
                    saveTasks();
                    closeEditModal();
                } else {
                    const responseText = await response.text();
                    if (responseText) {
                        const updatedTask = JSON.parse(responseText);
                        currentTaskDiv.setAttribute('data-title', updatedTask.title);
                        currentTaskDiv.setAttribute('data-description', updatedTask.description);
                        currentTaskDiv.setAttribute('data-assigned', updatedTask.assigned);
                        currentTaskDiv.setAttribute('data-priority', updatedTask.priority);
                        currentTaskDiv.setAttribute('data-status', updatedTask.status);
                        currentTaskDiv.setAttribute('data-deadline', formatDate(updatedTask.deadline)); // Use formatted date for display
                        currentTaskDiv.innerHTML = `<strong>${updatedTask.title}</strong><p>${updatedTask.description}</p>`;
    
                        const column = document.getElementById(updatedTask.status);
                        if (column) {
                            column.querySelector('.task-list-content').appendChild(currentTaskDiv);
                        }
    
                        saveTasks();
                        closeEditModal();
                    } else {
                        console.error('Error: Respuesta vacía del servidor.');
                    }
                }
            } else {
                console.error('Error al actualizar la tarea:', response.statusText);
            }
        } catch (error) {
            console.error('Error de red:', error);
        }
    });
            
    
    

    eliminarTask.addEventListener('click', () => {
        eliminarConfirmarModal.classList.add('is-active');
        closeEditModal();
    })

    siEliminar.addEventListener('click', () => {
        currentTaskDiv.remove();
        closeConfirmModal();
    })

    noEliminar.addEventListener('click', () => {
        closeConfirmModal();
    })

    function clearForm() {
        taskTitle.value = '';
        taskDescription.value = '';
        taskAssigned.selectedIndex = 0;
        taskPriority.selectedIndex = 0;
        taskStatus.selectedIndex = 0;
        taskDeadline.value = '';
    }

    function saveTasks() {
        const tasks = [];
        columns.forEach(column => {
            const taskDivs = column.querySelectorAll('.box');
            taskDivs.forEach(taskDiv => {
                tasks.push({
                    title: taskDiv.getAttribute('data-title'),
                    description: taskDiv.getAttribute('data-description'),
                    assigned: taskDiv.getAttribute('data-assigned'),
                    priority: taskDiv.getAttribute('data-priority'),
                    status: taskDiv.getAttribute('data-status'),
                    deadline: taskDiv.getAttribute('data-deadline'),
                    columnId: column.id 
                });
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'box';
            taskDiv.setAttribute('data-title', task.title);
            taskDiv.setAttribute('data-description', task.description);
            taskDiv.setAttribute('data-assigned', task.assigned);
            taskDiv.setAttribute('data-priority', task.priority);
            taskDiv.setAttribute('data-status', task.status);
            taskDiv.setAttribute('data-deadline', task.deadline);
            taskDiv.setAttribute('draggable', 'true');
            taskDiv.innerHTML = `<strong>${task.title}</strong><p>${task.description}</p>`;

            const column = document.getElementById(task.status);
            if (column) {
                column.querySelector('.task-list-content').appendChild(taskDiv);

                taskDiv.addEventListener('dragstart', () => {
                    taskDiv.classList.add('is-dragging');
                });

                taskDiv.addEventListener('dragend', () => {
                    taskDiv.classList.remove('is-dragging');
                    saveTasks();
                });

                taskDiv.addEventListener('click', () => openEditModal(taskDiv));
            }
        });
    }
});
