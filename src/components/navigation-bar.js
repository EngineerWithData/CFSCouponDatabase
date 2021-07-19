import * as React from 'react'
import { Switch } from '@headlessui/react'

function NavigationBar({ useMetric }) {

  return (
    <div className="flex space-x-4 items-center">
      <Switch.Group>
        <Switch.Label className="pl-3 py-1 text-white">
          Metric
        </Switch.Label>
        <Switch
          checked={useMetric.enabled}
          onChange={useMetric.onChange}
          className={`${
            useMetric.enabled ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span
            className={`${
              useMetric.enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
      </Switch.Group>
      <a
        href="https://github.com/cding91/gatsby-cfs"
        className="px-3 py-1 text-white hover:bg-indigo-600"
      >
        GitHub
      </a>
    </div>
  );
}

export default NavigationBar;