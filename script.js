// ດຶງອົງປະກອບຈາກໜ້າ HTML ມາໃຊ້ໃນ JavaScript

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// ເຮັດວຽກເມື່ອກົດປຸ່ມເພີ່ມ
addBtn.addEventListener("click", () => {
  // ອ່ານຂໍ້ຄວາມ ແລະຕັດຊ່ອງວ່າງຫົວທ້າຍ
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    // ສ້າງລາຍການວຽກ ແລະໃສ່ຂໍ້ຄວາມວຽກ
    const li = document.createElement("li");
    li.className = "task-item";
    const taskLabel = document.createElement("span");
    taskLabel.className = "task-text";
    taskLabel.textContent = taskText;

    // ສ້າງປຸ່ມແກ້ໄຂ ແລະປ່ຽນຂໍ້ຄວາມວຽກເມື່ອກົດ
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    editBtn.textContent = "ແກ້ໄຂ";
    editBtn.addEventListener("click", () => {
      // ສະແດງກ່ອງໃຫ້ປ້ອນຂໍ້ຄວາມວຽກໃໝ່
      const updatedText = prompt("ແກ້ໄຂວຽກ:", taskLabel.textContent);
      // ຖ້າກົດຍົກເລີກ ໃຫ້ອອກຈາກການແກ້ໄຂ
      if (updatedText === null) return;

      // ຕັດຊ່ອງວ່າງ ແລະບໍ່ຮັບຂໍ້ຄວາມວ່າງ
      const trimmedText = updatedText.trim();
      if (trimmedText === "") {
        alert("ຂໍ້ຄວາມວຽກຫ້າມວ່າງ!");
        return;
      }

      // ປ່ຽນຂໍ້ຄວາມວຽກເປັນຂໍ້ຄວາມໃໝ່
      taskLabel.textContent = trimmedText;
    });

    // ສ້າງປຸ່ມລຶບ ແລະເອົາລາຍການວຽກອອກເມື່ອກົດ
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "ລຶບ";
    deleteBtn.addEventListener("click", () => {
      taskList.removeChild(li);
    });

    // ໃສ່ຂໍ້ຄວາມ ແລະປຸ່ມແກ້ໄຂ/ລຶບໃນລາຍການ ແລ້ວເພີ່ມລົງໜ້າເວັບ
    li.appendChild(taskLabel);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // ລ້າງຊ່ອງປ້ອນຫຼັງເພີ່ມວຽກ
    taskInput.value = "";
  } else {
    // ແຈ້ງເຕືອນເມື່ອບໍ່ໄດ້ປ້ອນວຽກ ແລະກັບໄປໂຟກັສຊ່ອງປ້ອນ
    alert("ກະລຸນາປ້ອນວຽກກ່ອນ!");
    taskInput.focus();
  }
});
