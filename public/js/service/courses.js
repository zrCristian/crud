const findCoursesByIds = async (ids) => {
  const params = new URLSearchParams({
    ids: ids.join(','),
  });

  const response = await fetch(`/api/cursos/search?${params.toString()}`);

  return response.json();
};

export default findCoursesByIds;
