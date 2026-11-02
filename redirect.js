/** @file redirect.js 旧 RoamCat 落地页跳转；保留路径、查询与片段。
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
(() => {
  const current = new URL(location.href);
  const suffix = current.pathname.replace(/^\/roamcat(?:\/|$)/, '/');
  const destination = new URL('https://roamcat-dev.github.io/roamcat/');
  destination.pathname += suffix.replace(/^\/+/, '');
  destination.search = current.search;
  destination.hash = current.hash;
  location.replace(destination.href);
})();
