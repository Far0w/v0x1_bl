---
title: 11_shapes_from_pic_w_blob
draft: false
tags:
  - touchdesigner
  - soundreactive
description: Sound reactive generative shape
date: 2026-01-04
---
First generative shape,  react to physical potentiometer connected via [[arduino]] & sound
![[11_shapes_from_pic_w_blob.jpg]]



## Graph
![[11_shapes_from_pic_w_blob_graph_1.jpg]]
![[11_shapes_from_pic_w_blob_graph_2.png]]
I decided to used the cartesianToPolar ImageFilters, it works well for such structure, almost seamless.
It could be a good idea to rotate the figure in a 3rd dimension or to rotate the structure at each flickering of the noise (see below).

This generative shape is constantly moving but the [[flickering]] noise make the shape change suddenly. The input for the flickering noise is sound which is analysed by an audio analysis operator. 
## Inspiration
 ![](https://youtu.be/98xNOgU1zeI ) 
which is super cool video, but the outcome is quite different from what I explored here.

Basically, I decided to input a noise and tried different parameters + added interation with sound and potentiometer.

The sound I used, which I think is perfect for this kind of animation is [Dataflex](https://www.youtube.com/watch?v=gxvCBV7oj34&list=RDgxvCBV7oj34&start_radio=1&pp=ygUOZGF0YWZsZXggaWtlZGGgBwE%3D) by [Ryoji Ikeda](https://www.ryojiikeda.com/).
It's also a really practical input as it has really distinctive abrupt changes.