<template>
  <div class="container">
    <div id="WebGL-text"></div>
  </div>
</template>
<script src="./static/three/three.js"></script>
<script>
export default {
  data () {
    return {
      //场景
      scene: null,
      //相机
      camera: null,
      //渲染器
      renderer: null,
      width: null,
      height: null
    }
  },
  mounted () {
    this.init()
  },
  created () {
  },
  methods: {
    //场景
    initScene () {
      this.scene = new THREE.Scene()
      this.scene.position.set(0, 0, 0)
    },
    //相机
    initCamera () {
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.width / this.height,
        1,
        1000
      )
      //设置摄像机的位置，并让其指向场景的中心（0,0,0）
      this.camera.position.set(90, 90, 90)
      this.camera.lookAt(this.scene.position)
    },
    //渲染器
    initRender () {
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      this.renderer.setSize(this.width, this.height);
      this.renderer.setClearColor(new THREE.Color(0x000000))
    },
    //初始化坐标轴坐标轴
    initAxes () {
      let axes = new THREE.AxesHelper(200)
      this.scene.add(axes)
    },
    //将场景及相机进行渲染
    render () {
      this.renderer.render(this.scene, this.camera)
    },
    //
    animate () {
      requestAnimationFrame(this.animate)
      this.render()
    },
    //控制器
    initControls () {
      this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement)
      this.controls.target.set(0, 0, 0)
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.controls.enableDamping = false
      this.controls.dampingFactor = 0.25;
      this.controls.screenSpacePanning = false;
      //是否可以缩放
      this.controls.enableZoom = true
      //设置相机距离原点的最近距离
      this.controls.minDistance = 10
      //设置相机距离原点的最远距离
      this.controls.maxDistance = 800
      //是否开启右键拖拽
      this.controls.enablePan = true
      this.controls.autoRotate = false;
      this.controls.autoRotateSpeed = .5
      this.controls.maxPolarAngle = Math.PI / 1;
    },
    //网格辅助线
    initGrid () {
      let helper = new THREE.GridHelper(100, 50, 0x0000ff, 0x808080);
      this.scene.add(helper);
    },

    //画曲线
    spline () {

    },
    //画正方体
    //车箱
    Cube () {
      const cubeGeometry = new THREE.BoxGeometry(40, 40, 40)
      const cubeMaterial = new THREE.MeshStandardMaterial({
        color: 0xff0000,
        opacity: 1,
        transparent: true,
      })
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
      cube.position.set(0, 0, 0)
      this.scene.add(cube)
    },


    //网页加载完毕后会被调用
    init () {
      this.width = document.getElementById('WebGL-text').clientWidth
      this.height = document.getElementById('WebGL-text').clientHeight
      this.initScene()
      this.initCamera()
      this.initRender()
      this.initAxes()
      this.initGrid()

      this.spline()
      // this.Cube()

      document.getElementById('WebGL-text').appendChild(this.renderer.domElement)
      this.initControls()
      this.animate()
    }

  }
}
</script>
<style scoped lang="less">
.container {
  width: 1000px;
  height: 1000px;
  margin: 0 auto;
  border: 1px solid red;
}
#WebGL-text {
  width: 100%;
  height: 100%;
}
</style>