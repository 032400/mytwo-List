<template>
	<div id="app">
		<router-view></router-view>
		<!-- <Tabbar v-if="$route.path!=='/fenlei'"></Tabbar> -->
	</div>
 	
	

</template>

<script>
	// import Tabbar from '@/components/home/tabbar.vue'

	export default {
		components:{
			// Tabbar,
		},
		data() {
			return {
				currentClassname: "",
				bar:"$route.path!=='/fenlei'"
			}
		},
		// watch: {
		// 	"$route": function(to, from) {
		// 		var toLength = to.path.split('/').length;
		// 		var fromLength = from.path.split('/').length;
		// 		console.log("去的路由", toLength)
		// 		console.log("来自哪个路由", fromLength)
		// 		if (toLength > fromLength) {
		// 			this.currentClassname = "fadeInRight animated"
		// 		} else if (toLength < fromLength) {
		// 			this.currentClassname = "fadeInLeft animated"
		// 		} else {
		// 			this.currentClassname = "fadeIn animated"
		// 		}
		// 	}
		// },
	}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: .3rem;
  padding-bottom: 1rem;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
