---
title: "qmk_firmware 빌드 시에 chibios 관련 에러 발생"
date: "2018-10-16T10:34:00.000Z"
layout: post
draft: false
path: "/posts/error-while-binding-qmk-firmware/"
category: "tech"
tags:
---

`qmk_firmware`는 programmable한 여러 키보드들을 지원하는 오픈소스 펌웨어다. 이 펌웨어가 지원하는 대표적인 키보드는 planck, ergodox 등이 있다.
documentation 및 자세한 정보는 https://qmk.fm/ 에서 확인할 수 있다.
처음 이 소스를 clone 받아서 빌드를 하기 위해서 documentation을 보면 아래와 같이 가이드를 해준다.

```
$ make <my_keyboard>:<my_keymap>
```

하지만 그대로 따라치면 아래와 같은 에러를 볼 수 있다.

```
$ make ergodo_infinity:default

tmk_core/chibios.mk:38: lib/chibios-contrib/os/common/startup/ARMCMx/compilers/GCC/mk/startup_k20x7.mk: No such file or directory
tmk_core/chibios.mk:40: lib/chibios/os/hal/hal.mk: No such file or directory
tmk_core/chibios.mk:46: lib/chibios-contrib/os/hal/ports/KINETIS/K20x/platform.mk: No such file or directory
tmk_core/chibios.mk:78: lib/chibios-contrib/os/hal/boards/PJRC_TEENSY_3_1/board.mk: No such file or directory
tmk_core/chibios.mk:79: lib/chibios/os/hal/osal/rt/osal.mk: No such file or directory
tmk_core/chibios.mk:81: lib/chibios/os/rt/rt.mk: No such file or directory
tmk_core/chibios.mk:87: lib/chibios/os/common/ports/ARMCMx/compilers/GCC/mk/port_v7m.mk: No such file or directory
tmk_core/chibios.mk:89: lib/chibios/os/hal/lib/streams/streams.mk: No such file or directory
quantum/visualizer/visualizer.mk:77: lib/ugfx/gfx.mk: No such file or directory
make[1]: *** No rule to make target `lib/ugfx/gfx.mk'.  Stop.
make: *** [ergodox_infinity:default] Error 1
```

이는 submodule이 적절히 업데이트 되지 않아 발생하는 문제다.
따라서 아래의 명령어로 submodule을 업데이트 시켜주면 정상적으로 다시 빌드를 할 수 있다.

```
$ make git-submodule
```

혹은 아래의 두 명령어도 같은 역할을 한다.

```
$ git submodule sync --recursive
$ git submodule update --init --recursive --progress
```
