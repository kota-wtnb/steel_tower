(function() {
  "use strict";

  var viewer = new Cesium.Viewer("cesium", {
    baseLayerPicker : true,  //デフォルトのレイヤ切り替えウィジェットをオフにする
    timeline : false,         //デフォルトのタイムラインウィジェットをオフにする
    animation : false         //デフォルトのアニメーションウィジェットをオフにする
  });
//1
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.402755, 35.555896, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//2
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.407378, 35.55738, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower_red.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//3
  //var viewer = new Cesium.Viewer("cesium");
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.40718, 35.558445, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//4
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.40898, 35.558605, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));

//5
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.412046, 35.556688, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//6
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.412155, 35.55672, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//7
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.414245, 35.556945, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//8
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.417175, 35.556503, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//9
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.420471, 35.555961, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//10
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.423645, 35.555553, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower_red.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//11
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.427566, 35.55325, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//12
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.428361, 35.55103, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));

//13
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.430803, 35.549225, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//14
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.431245, 35.549308, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//15
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.433716, 35.547771, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//16
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.434646, 35.546975, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//17
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.435836, 35.546805, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//18
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.437971, 35.545496, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//19
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.439591, 35.543461, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));
//20
  var scene = viewer.scene;

  var modelMatrix = Cesium.Transforms.eastNorthUpToFixedFrame(
      Cesium.Cartesian3.fromDegrees( 139.443496, 35.542013, 0.0));
  var model = scene.primitives.add(Cesium.Model.fromGltf({
      url : './steel_tower.gltf',
      modelMatrix : modelMatrix,
      scale : 5.0
  }));


  viewer.dataSources.add(Cesium.KmlDataSource.load("kml/steel_tower.kml"));

  viewer.camera.setView({
  destination: Cesium.Cartesian3.fromDegrees(139.402755, 35.555896, 3000),
  orientation: {
    heading: 0, // 水平方向の回転度（ラジアン）
    pitch: -1.3, // 垂直方向の回転度（ラジアン） 上を見上げたり下を見下ろしたり
    roll: 0
  }
});
  // コードをここに記述

}());
