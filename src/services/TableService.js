/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export function TableSort(arr, key, sortOrder, offset, limit) {
  let orderNumber = 1
  if (sortOrder==="desc") {
    orderNumber = -1
  }
  return arr.sort(function(a, b) {
    var keyA = a[key],
      keyB = b[key];
    if (keyA < keyB) return -orderNumber;
    if (keyA > keyB) return orderNumber;
    return 0;
  }).slice(offset, offset + limit);
}