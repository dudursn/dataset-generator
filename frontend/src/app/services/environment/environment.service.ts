// See Copyright Notice in the LICENSE file for details

import { Inject, Injectable } from '@angular/core';

/**
 * Provides an interface to access the environment variables injected in the library.
 */
@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  /**
   * Environment variable injected in the library.
   */
  environment: Record<string, any>;

  /**
   * Constructor.
   *
   * Verifies whether the environment has all required keys.
   *
   * @param environment environment variable injected in the library
   */
  constructor(@Inject('environment') environment: any) {
    this.environment = environment;
  }

  /**
   * Returns wether the environment has the given key.
   *
   * @param key desired key
   * @returns true if the environment has the desired keys, false otherwise
   */
  public hasValue(key: string): boolean {
    const parts = key.split('.');
    let obj = this.environment;

    for (const part of parts) {
      if (!obj || !obj.hasOwnProperty(part)) {
        return false;
      }

      obj = obj[part];
    }

    return true;
  }

  /**
   * Returns the value associated to the given key.
   *
   * @param key desired key
   * @returns the value associated to the given key
   */
  public getValue(key: string): any {
    const parts = key.split('.');
    let obj = this.environment;

    for (const part of parts) {
      if (!obj || !obj.hasOwnProperty(part)) {
        return null;
      }

      obj = obj[part];
    }

    return obj;
  }

}
