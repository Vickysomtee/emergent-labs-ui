<template>
  <div class="navbar">
    <img src="../assets/Bitmap.png" alt="" />

    <div class="admin">
      <div class="img-box">
        <img src="" alt="" srcset="" />
      </div>
      <div class="admin-name">Hi, Joshua</div>
      <svg
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.99889 5.55556L10 0.00111334L0 0L4.99889 5.55556Z"
          fill="#013C61"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    z-index: 1;
    top: 0;
    /* overflow-y: auto; */
    position: fixed;
    border: 1px solid #6a7e8a1a;
    background: #fff;

  .admin {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-right: 50px;
    width: 180px;
    color: #013c61;
    font-size: 20px;

    .img-box {
      width: 40px;
      height: 40px;
      margin-top: 4px;
      border-radius: 50%;
      background: #6a7e8a;
    }
    .admin-name {
      position: relative;
      top: 12px;
    }
    svg {
      width: 15px;
      height: 15px;
      position: relative;
      top: 17px;
    }
  }
}
</style>
