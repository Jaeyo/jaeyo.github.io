---
title: "Install docker-compose on Ubuntu 18.04"
date: "2019-08-22T16:18:00.000Z"
template: "cheatsheet"
tags: ["docker", "ubuntu"]
---

- refer: https://docs.docker.com/compose/install/

```bash
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

