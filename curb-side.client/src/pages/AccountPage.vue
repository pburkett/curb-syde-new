<template>
  <div class="container p-3">
    <div class="row pointer mb-3 px-3" @click="myOrders()">
      <div class="col dark-lines zoom">
        <h4>My Orders</h4>
      </div>
    </div>
    <div class="row pointer mb-3 px-3">
      <div class="col dark-lines">
        <h4>Account Info</h4>
      </div>
    </div>
    <div class="row pointer mb-3 px-3">
      <div class="col dark-lines">
        <h4>Favorite Shops</h4>
      </div>
    </div>
    <div class="row pointer mb-3 px-3">
      <div class="col dark-lines">
        <h4>Contact Us</h4>
      </div>
    </div>
    <div class="row pointer mb-3 px-3">
      <div class="col dark-lines">
        <h4>Help</h4>
      </div>
    </div>
    <div class="row pointer mb-3 px-3" @click="createBusiness()">
      <div class="col dark-lines">
        <h4>I want to register a business</h4>
      </div>
    </div>
    <div class="row mb-3 px-3 pointer" @click="myBusiness()">
      <div class="col dark-lines">
        <h4>My Businesses</h4>
      </div>
    </div>
    <div class="row mb-3 px-3 pointer" @click="logout()">
      <div class="col dark-lines text-danger">
        <h4>Logout</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
import { AuthService } from '../services/AuthService'
export default {
  name: 'Account',
  setup() {
    const router = useRouter()
    return {
      account: computed(() => AppState.account),
      myBusiness() {
        router.push({ name: 'MyBusinesses' })
      },
      createBusiness() {
        router.push({ name: 'CreateBusiness' })
      },
      myOrders() {
        router.push({ name: 'MyOrdersPage', params: { id: AppState.account._id } })
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
