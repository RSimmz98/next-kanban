import React, {useCallback} from 'react';
import {useAsync} from 'react-async-hook';
import {useRouter} from 'next/router'

import {useServiceClient} from '../service'
import {Dashboard} from '../dashboard';
import{ ErrorPage} from '../components/error-page';

const errMsg = 'The project failed'

export default function DashboardPage(){
  const router = useRouter();
  const projectId = router.query.projectId as string;
  const service = useServiceClient();
  const {error, loading, result} useAsync<ProjectState>(
    const updateProjectData = useCallback((projectData))
  )
} 

