<template>
  <div id='main'>
    <el-container>
      <el-form>
        <el-form-item> </el-form-item>
        <el-form-item label="Name">
          <el-input v-model="newToDo"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addNewToDo">Add New</el-button>
          <el-button type="success" @click="doneAllToDo">All Done</el-button>
          <el-button type="warning" @click="deleteAll">Delete All</el-button>
        </el-form-item>
      </el-form>
    </el-container>

    
    <el-row
      :gutter="20"
      class="todo-list"
      :key="todo.id"
      v-for="(todo) in newToDoList"
    >
      <el-col :span="4">
        <div class="grid-content bg-purple">
          <h3 :class="{ done: todo.done }">{{ todo.content }}</h3>
        </div>
      </el-col>
      <el-col :span="4">
        <el-switch
          @click="toggleDone(todo.done)"
          v-model="todo.done"
        ></el-switch>
      </el-col>
      <el-button type="danger" class="btn-remove" style="display: none;" @click="deleteToDo(todo.id)">Delete</el-button>       
    </el-row>

    <el-row>
      <Suspense>
        <template #default>
          <Users /> 
        </template>
        <template #fallback>
          <div>Loading users...</div>
        </template>
      </Suspense>
    </el-row>
    
  </div>
</template>

<script>
import { ref } from "vue";
import Users from '../components/Users'

export default {
  name: "ToDo",
  components: {
    Users,
  },
  setup() {
    const newToDo = ref("");
    const done = ref(false);
    const newToDoList = ref([]);

    function addNewToDo(e) {
      e.preventDefault();
      // console.log("newToDo.value :>> ", newToDo.value);

      newToDoList.value.push({
        id: Date.now(),
        done: false,
        content: newToDo.value,
      });

      newToDo.value = "";
    }

    /* eslint-disable no-unused-vars */
    function toggleDone(todo) {
      todo = !todo;
      
      const btnDelete = document.querySelector('.btn-remove')
      !todo ? btnDelete.style.display = 'block' : btnDelete.style.display = 'none'
    }

    function deleteToDo(todo) {
        const id = todo.id
        setTimeout(function(id) {
          newToDoList.value.splice(id, 1);
        }, 300)
    }


    /* eslint-disable no-unused-vars */

    function doneAllToDo() {
        newToDoList.value.forEach(item => item.done = true)
    }

    function deleteAll() {    
        newToDoList.value = [];
    }

    return {
      newToDo,
      done,
      newToDoList,
      addNewToDo,
      toggleDone,
      deleteToDo,
      doneAllToDo,
      deleteAll
    };
  },
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}

.todo-list {
  display: flex;
  align-items: center;
}

</style>
