<?php

namespace App\Controller;

use App\Repository\MovieRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MoviesController extends AbstractController
{
    public function __construct(
        private MovieRepository $movieRepository,
        private SerializerInterface $serializer
    ) {
    }

    /**
     * @Route("/movies", methods={"GET"})
     */
    #[Route('/movies', methods: ['GET'])]
    public function getMovies(): JsonResponse
    {
        $movies = $this->movieRepository->findAll();
        $data = $this->serializer->serialize($movies, 'json', ['groups' => 'default']);

        return new JsonResponse($data, 200, ['Content-Type' => 'application/json'], true);
    }
}
